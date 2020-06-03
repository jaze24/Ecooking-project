import spaService from "./spa.js";
import loaderService from "./loader.js";

class AuthService {
    constructor() {
        
        this.userRef = _db.collection("users");
        this.authUser;
        this.authUserRef;
    }

    swap(){
        const authSwitchLinks = document.querySelectorAll('.switch');
        const authModals = document.querySelectorAll('.auth-container .modal');
        const signOut = document.querySelector('.right');
        
        //toggle auth modals - skifter mellem "Login" og "Register"
        //for at gennemgå begge links ved brug af foreEach metode og køre en funktion for hvert links
        //bruger et eventlistener der lytter når man klikker på linket og gennemgå alle "modals"
        //og toggler den 'active' class (gå ind i klassliste og for hvert modal, hvis den har en active class
        //bliver det fjernet og hvis ikke, bliver det vist)
        authSwitchLinks.forEach(link => {
            link.addEventListener('click', () => {
                authModals.forEach(modal => modal.classList.toggle('active'));
            });
        });
        // sign out user - med et event der lytter når man klikker ved 'signOut', der er refereret i DOM
     signOut.addEventListener('click', () => {
        firebase.auth().signOut()
        
         
    }) 
    }

    

    init() {
        const authModals = document.querySelectorAll('.auth-container .modal');
        const authWrapper = document.querySelector('.auth-container');
        
        //auth listener - lytter til hvad der sker når en 'user' logger ind eller registrerer sig til appen
        //viser log in/register form når en user ikke er 'authenticated' med firebase
        //viser appens indhold efter man har logget/registreret sig  
        firebase.auth().onAuthStateChanged(user => {
            // if else statement lytter om argumentet er 'true' eller 'false', til hvis useren er logget ind og logget ud
            if(user){
                console.log('user logged in:', user);
                this.userAuthenticated(user);
                //fjerner hele parent wrapper og begge classes som er log in og register
                authWrapper.classList.remove('open');
                authModals.forEach(modal => modal.classList.remove('active'));
            } else{
                console.log('user signed out:');
                this.userNotAuthenticated();
                //argument her er det modsatte, viser wrapperen og den active classe, med skift mellem log in eller register
                authWrapper.classList.add('open');
                //åbner den første 'model' som er den log in form til appen
                authModals[0].classList.add('active');
            }
        
        })
    }

    userAuthenticated(user) {
        spaService.hideTabbar(false);
        this.initAuthUserRef();
        loaderService.show(false);
        
        const loginForm = document.querySelector('.login');

        //login form -- samme funktioner og metoder hertil men med 'login' værdier der gemmes/bruges og hentes
        loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); //forhindre at refreshe browseren for ikke mister det man har tastet

        // henter user info
        // gemme 'værdien' i en variable af det man har tastet i inputfield
        const email =loginForm['login-email'].value; 
        const password = loginForm['login-password'].value;

        console.log(email, password);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(cred => {
            loginForm.reset();
            })
            .catch((error) => {
                loginForm.querySelector('.error').textContent = "Entered email or password is invalid";
                
            });
    });

    }

    userNotAuthenticated() {
        spaService.hideTabbar(false);
        spaService.navigateTo("login");

        //register form
        const registerForm = document.querySelector('.register');
        registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); //forhindre at refreshe browseren for ikke mister det man har tastet

        //gemme 'værdien' i en variable af det man har tastet i inputfield
        //hvert variable fortæller hvilke attribute i det bestemt inputfield man hente fra og det værdi man ønske at gemme
        const email = registerForm['signup-email'].value; 
        const password = registerForm['signup-password'].value;

        //tester om det virker i console
        console.log(email, password);

        //bruger firebase objekt til at gemme info i 'auth service' ved firebase
        firebase.auth().createUserWithEmailAndPassword(email, password)
            //tage objektet af 'user' 
            .then(cred => {
                registerForm.reset();
            }) 
                
            });
        loaderService.show(false);
    }

    initAuthUserRef() {
        let authUser = firebase.auth().currentUser;
        this.authUserRef = _db.collection("users").doc(authUser.uid);

        // init user data
        this.authUserRef.onSnapshot({
            includeMetadataChanges: true
        }, userData => {
            if (!userData.metadata.hasPendingWrites) {
                let user = {
                    ...authUser,
                    ...userData.data()
                }; //concating two objects: authUser object and userData objec from the db
                this.authUser = user;
                this.appendAuthUser();
                loaderService.show(false);
               
            }
        });
    }

    

    appendAuthUser() {
        document.querySelector('#name').value = this.authUser.displayName || "";
        document.querySelector('#lastname').value = this.authUser.lastname || "";
        document.querySelector('#mail').value = this.authUser.email;
        document.querySelector('#phone').value = this.authUser.phone || "";
    }

    updateAuthUser(name,lastname, phone) {
        loaderService.show(true);

        let user = firebase.auth().currentUser;

        // update auth user
        user.updateProfile({
            displayName: name
        });

        // update database user
        this.authUserRef.set({
            name: name,
            lastname: lastname,
            phone: phone
        }, {
            merge: true
        }).then(() => {
            loaderService.show(false);
        });

    }
}

const authService = new AuthService();
export default authService;
// ========== GLOBAL FIREBASE CONFIG ========== //
// Your web app's Firebase configuration
const _firebaseConfig = {
  apiKey: "AIzaSyDr9_uJwlm4vRTUbJIuxMmmyu0zqTC0mnc",
    authDomain: "advanced-front.firebaseapp.com",
    databaseURL: "https://advanced-front.firebaseio.com",
    projectId: "advanced-front",
    storageBucket: "advanced-front.appspot.com",
    messagingSenderId: "501363144435",
    appId: "1:501363144435:web:caf8139b7a2f44cb826986",
    measurementId: "G-LQSLE7ZY0R"
};
// Initialize Firebase and database references
firebase.initializeApp(_firebaseConfig);
const _db = firebase.firestore();
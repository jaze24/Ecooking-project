// import your pages
import LoginPage from "./pages/login.js";
import PageOne from "./pages/page-one.js";
import ProfilePage from "./pages/profile.js";
import ShopPage from "./pages/shop.js";
import PageTwo from "./pages/page-two.js";
import PageThree from "./pages/page-three.js";
import PageFour from "./pages/page-four.js";
import PageFive from "./pages/page-five.js";
import PageSix from "./pages/page-six.js";
import PageAdvice from "./pages/page-advice.js";

// import your services
import spaService from "./services/spa.js";
import authService from "./services/auth.js";
import postService from "./services/post.js";
import commentService from "./services/comments.js";
import searchService from "./services/search.js";

// Declare and init pages
let loginPage = new LoginPage();
let shopPage = new ShopPage();
let profilePage = new ProfilePage();
let pageOne = new PageOne();
let pageTwo= new PageTwo();
let pageThree = new PageThree();
let pageFour = new PageFour();
let pageFive = new PageFive();
let pageSix = new PageSix();
let pageAdvice = new PageAdvice();


// init services 
spaService.init();
authService.init();
authService.swap();
postService.createPost();
commentService.postComments();
searchService.search();

// ready called when user is authenticated 
// and the app is ready!
window.ready = () => {
    console.log("READY");
    
}

// onclick handlers

window.updateUser = () => profilePage.updateUser();



  
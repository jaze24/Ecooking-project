export default class LoginPage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="login" class="page">
        <header class="topbar"> 
        </header>
        <!-- firebase auth container  -->
        <section class="auth-container open">
                  <div class="modal">
                  <img src="images/tekstur.png">
                  <h2>Sign in</h2>
                      <form class="login">
                          <input type="email" id="login-email" name="email" placeholder="Email">
                          <input type="password" id="login-password" name="password" placeholder="Password">
                          <button>Login</button>
                          <p class="error"></p>
                      </form>
                      <div>Not a member? <a class="switch">Sign up here!</a></div>
                  </div>
                  <div class="modal">
                  <img src="images/tekstur.png">
                  <h2>Sign up</h2>
                      <form class="register">
                          <input type="email" id="signup-email" name="email" placeholder="Email">
                          <input type="password" id="signup-password" name="password" placeholder="Password">
                          <button>Register</button>
                          <p class="error"></p>
                      </form>
                      <div>Already a member? <a class="switch">Sign in here!</a></div>
                  </div>
            </section>
            <section class="content-container">
            <div class="overskrift">
            <img src="images/tekstur.png">
            <h2>Ecooker community</h2>
            </div>

              <div class="indhold-link1">
              <a class="link" href="#page-six">
              <img src="images/getadvice.png">
                <div><h3>Get advice</h3>
                <p>Sarah Grünewalds favorits</p>
                </div>
                </a>
                </div>

              <div class="indhold-link2">
                <a class="link" href="#page-two">
                <img src="images/ecookerGroups.png">
                <div><h3>Ecooker Groups</h3>
                <p>Real people - real talk!</p>
                </div>
                </a>
              </div>


              <div class="indhold-link3">
                <a class="link" href="#page-three">
                <img src="images/tips.png">
                <div><h3>Tips &amp; tricks</h3>
                <p>From Ecooking employees</p>
                </div>
                </a>
              </div>


              <div class="indhold-link4">
                <a class="link" href="#page-four">
                <img src="images/calender.png">
                <div><h3>Ecooker Calendar</h3>
                <p>Events</p>
                </div>
                </a>
              </div>


              <div class="indhold-link5">
                <a class="link" href="#page-five">
                <img src="images/sneakpeaks.png">
                <div><h3>Sneak peaks</h3>
                <p>Upcoming products</p>
                </div>
                </a>
              </div>

            </section>
      </section>
    `;
  }
}
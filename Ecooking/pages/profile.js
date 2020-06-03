import authService from "../services/auth.js";
export default class ProfilePage {
  constructor() {
    this.template();
    this.authService = authService;
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="profile" class="page">
      <header class="topbar">
      <img class="tekstur" src="images/tekstur.png">
      <a href="#login"><img class="back" src="images/back.png"></a>  
      <h2>Profile</h2>
        <a class="right" href="#login">Logout</a>
      </header>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Type your name" required>
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" placeholder="Type your last name" required>
        <label for="mail">Mail</label>
        <input type="email" id="mail" placeholder="Type your mail" disabled>
        <label for="phone">Phone</label>
        <input type="phone" id="phone" placeholder="Type your phone number">
        <button type="button" name="button" onclick="updateUser()">Save</button>
      </form>
    </section>
    `;
  }

  updateUser() {
    let name = document.querySelector('#name').value;
    let lastname = document.querySelector('#lastname').value;
    let phone = document.querySelector('#phone').value;

    this.authService.updateAuthUser(name, lastname, phone);
  }


}
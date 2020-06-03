export default class ShopPage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="shop" class="page">
        <header class="topbar">
        <img class="tekstur" src="images/tekstur.png">
        <a href="#login"><img class="back" src="images/back.png"></a>  
        <h2>Shop</h2>
        </header>
        <h3>Visit our shop for more inspiration and product purchases</h3>
        <img class="banner" src="images/Banner.jpg">
        <a href="https://ecooking.dk/"><button class="goToShop">Go to shop</button></a>
            </section>
    `;
  }
}
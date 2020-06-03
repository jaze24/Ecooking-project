export default class PageFour {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="page-four" class="page">
        <header class="topbar">
        <img class="tekstur" src="images/tekstur.png">
        <a href="#login"><img class="back" src="images/back.png"></a>  
        <div class="calendar">
        <h2>Ecooker calendar</h2>
        </div>
        </header>
<h3>Danish Beauty Award</h3>
<div class="eventBilleder">
<img src="images/ELLE-Style-Awards.jpg">
<p>The Danish Beauty Award is an award given in the cosmetics industry to the best beauty products and sites of the year.
</p>
</div>
<button class="ticket">Get ticket!</button>
<h3>Danish Beauty Award</h3>
<div class="eventBilleder">
<img src="images/dba.png">
<p>The Danish Beauty Award is an award given in the cosmetics industry to the best beauty products and sites of the year.
</p>
</div>
<button class="ticket">Get ticket!</button>
      </section>

  
    `;
  }
}
export default class PageSix {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="page-six" class="page">
        <header class="topbar">
        <img class="tekstur" src="images/tekstur.png">
        <a href="#login"><img class="back" src="images/back.png"></a>
        <h2>Get advice</h2>
        </header>
        <h3>Choose a category</h3>
        <div class="categories">
        <a href="#page-advice"><img src="images/summer.png"></a>
        <img src="images/skincare.png">
        <img src="images/reuse.png">
        <img src="images/night.png">
        <img src="images/morning.png">
        <img src="images/homemade.png">
        <img src="images/pimples.png">
        <img src="images/winter.png">
        <img src="images/babies.png">
        </div>
      </section>

  
    `;
  }
}
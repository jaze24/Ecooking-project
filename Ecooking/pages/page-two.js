export default class PageTwo{
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="page-two" class="page">
        <header class="topbar">
        <img class="tekstur" src="images/tekstur.png">
        <a href="#login"><img class="back" src="images/back.png"></a>
        <div class="calendar">
        <h2>Ecooker groups</h2>
        </div>
        </header>

        <h4>Real people - real talk!</h4>
        <h5>Join groups that feature your interests, skin concerns, or are on the same skin-journey as you - meet like-minded Ecookers.</h5>
        <div class="ecookerGroups1">
              <a class="link" href="#page-one">
              <img src="images/pregnant.jpg">
                <div class="beskrivelse"><h3>Preggo club</h3>
                <p>Helping you through your mommy-skin journey.</p>
                </div>
                </a>
                </div>

              <div class="ecookerGroups2">
                <a class="link" href="#page-two">
                <img src="images/oilyskin.jpg">
                <div><h3>Oily skin</h3>
                <p>Because sometimes it’s just inconvenient to shine.</p>
                </div>
                </a>
              </div>

              <div class="ecookerGroups3">
                <a class="link" href="#page-three">
                <img src="images/aging.jpg">
                <div><h3>Age with grace</h3>
                <p>Aging is a part of life - why not make the best of it?</p>
                </div>
                </a>
              </div>


      </section>

  
    `;
  }
}
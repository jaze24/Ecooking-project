export default class PageAdvice {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="page-advice" class="page">
        <header class="topbar">
        <img class="tekstur" src="images/tekstur.png">
        <a href="#page-six"><img class="back" src="images/back.png"></a>        
        <h2>Get advice</h2>
        </header>
        <h3>Summer and sun</h3>
        <h4>Sarah Grünewalds favorite sunlotion</h4>
        <img class="sarah" src="images/sunlotion.png">
        <p>Sunscreen is an important way of protecting the skin against the sun’s harmful rays. With such a wide range to choose from, how can we know which is the best option?
        </p>
        <p>Although the Danish summer often offers equal parts of rain and sun, there is still good reason to remember the sunscreen every day. The sun’s rays can reach your skin even on cloudy days.

        If you want a beautiful and healthy complexion, without too many pigment spots, beginning lines and deeper wrinkles, the sunscreen is the summer’s best investment.
        
        We have found the best face creams that can be used both under and on top of the makeup. With such good bids, it’s easy to let the sunscreen be part of daily care - and your skin will thank you in </p>
        <a href="https://ecooking.dk/produkt/solcreme-spf-30-200ml/"><button class="sunlotion">Get it now!</button></a>
      </section>

  
    `;
  }
}
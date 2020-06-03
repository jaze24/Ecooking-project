export default class PageThree {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="page-three" class="page">
        <header class="topbar">
        <img class="tekstur" src="images/tekstur.png">
        <a href="#login"><img class="back" src="images/back.png"></a>   
        <h2>Tips &amp; tricks</h2>
        </header>
        <h3>Make your own mask</h3>
        <img class="advocato" src="images/advocato.png">
        <p>We can all use a little self-pity from time to time and a great way to pamper yourself is by using a delicious face mask! If you do not have such a landscape, then do not worry - you do not have to move outside the four walls of the home to find an effective face mask. It just requires a few ingredients that you, in all likelihood, already have in your kitchen.</p><br>
<br>
        <h6>Ingrediens</h6>
        <p>1 tsp. oatmeal<br>
        2 tsp. honey <em>(if you don’t have honey but Ecooking Multi Oil, you can use it too)</em><br>
        1 tsp. yogurt</p>
        <br><br>
        <h6>Course of action</h6>
       <p>Mix the ingredients together and put on the face mask for 15-20 minutes. Then rinse your face with lukewarm water.
        </p>

        <h3>Reuse empty bottles</h3>
        <img class="advocato" src="images/genbrug.jpg">
        <p>We are very conscious of thinking as sustainably as possible so that you can use your products with good conscience. Part of that thinking is to reuse the packaging. We make every effort to create jars and bottles that are so fine that you can easily use them in your everyday life when you have used up your products.
        </p><br>
        <h6>Candlestick</h6>
        <p>The brown glass that our jars are made of gives a nice light play when you come in a four-light candle. Perfect to put in the window or on the terrace on a summer evening.
        </p><br>
        <h6>Spice jar</h6>
        <p>The glass jars have a screw lid that closes so effectively that your products are always fresh and ready to care for your skin. Reuse that feature to store your spices in an airtight jar that is also a nice item on your kitchen shelves.
        </p><br>
        <h6>Vases</h6>
        <p>The bottles in our range can turn into fine vases. The different sizes stand together nicely in a small bunch, but are also good individually with a single flower in on the bedside table or on the bathroom shelf.
        </p><br>
        <h6>Jewelry box</h6>
        <p>Our glass jars are great for storing your jewelry. Whether on the bedside table, on the shelf or in the closet, but also on trips where it is nice to have control of your jewelry in a jar that can be closed and secure your precious items.
        </p>
        <img class="advocato" src="images/genbruglys.jpg">


      </section>

  
    `;
  }
}
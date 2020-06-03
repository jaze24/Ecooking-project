
export default class PageOne {
  constructor() {
    this.template();
  
    
    
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="page-one" class="page">
            <header class="topbar">
              <h2>Preggo Club</h2>
            </header>
            <form id="search-post">
              <input type="text" id="search" name="search" placeholder="Search all posts">
            </form>
            <h2 id="postHead">Write a post</h2>
                
                <form id="add-post">
                  <input type="text" id="headline" name="headline" placeholder="Headline">
                  <input type="text" id="description" name="description" placeholder="Write post...">
                  <button>Post</button>
                  </form>
               
                
      
                
          
                <section class="post-container">
                
                <h2>Recently posted</h2>
                <article id="allPost">
                <div id="post-list">
                </article>
                
               
                <form id="comment-post">
                      <div id="cross">X</div>
                     <textarea id="comment">Your comment here...</textarea>
                     <button id="closeBtn">Comment</button>
                </form>

              </section>
      </section>

  
    `;

  
  }
  
}
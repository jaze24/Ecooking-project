class PostService{
  constructor(){
    this.postRef = _db.collection("posts")
    
    
  }

  createPost() {
    // gemmer post man laver i DOM med det valgte id og gemmer i en variable
    const addPost = document.querySelector('#add-post');
 
   
    
    //henter data fra database collection  ved brug af Snapshot
    this.postRef.onSnapshot((snapshotData) => {
      let posts = [];
      //tager alle dokumenter og går igennem dem en ad gang vis forEach metoden
      snapshotData.docs.forEach(doc => {
        let post = doc.data();
        post.id = doc.id;
        posts.push(post);
      });
      //hver dokument bliver kaldt gennem denne funktion og render til DOM
      this.renderPost(posts);
      
      
    })

    //eventlistner til når man trykke på "post" knap
    addPost.addEventListener('submit', (e) => {
      e.preventDefault(); // fjerner default for at browseren ikke opdater når man trykke på knappen
      //tager value af begge felter og tilføje til kollektion i firebase, via add metoden
      this.postRef.add({
        headline: addPost.headline.value,
        description: addPost.description.value,

      });
        // sætter begge inputfelter til tomme string for at gentarte felter efter indtastning/tryk på knappen "Post"
        addPost.headline.value = " ";
        addPost.description.value = " ";      

    })
    
    
    
  }
  // laver element og render posts til DOM
  renderPost(posts) {


    let htmlTemplate = "";
    for (let post of posts) {
 
    htmlTemplate += `
      <article>
        <h3>${post.headline}</h3>
        <p>${post.description}</p>
        <section id="postC"></section>
        <div id="all-btn">
        <button id="commentLikes">Likes 23</button>
        <button id="commentBtn">Comment Post</button>
        <button id="commentThumbs">Comments 44</button>
        </div>
      </article>
    `;
      }
    document.querySelector('#post-list').innerHTML = htmlTemplate;

          //kommentere post i DOM, brug af eventlistener til at få formular frem, ved at kigge på hvert knap der er i DOM
      document.querySelectorAll("#commentBtn").forEach(addbutton =>{

      addbutton.addEventListener('click', (e) =>{
       
        const addComment = document.querySelector("#comment-post");
        
        if(addComment.style.display === "none"){
          addComment.style.display = "block";

        } else{
          addComment.style.display = "none";
        }
      })
    })
    
    
  }
 
 
}

const postService = new PostService();
export default postService;



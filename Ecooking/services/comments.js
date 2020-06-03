
class CommentService{
  constructor(){
    this.comRef = _db.collection("comments")
    
  }

  postComments() {
    // gemmer post man laver i DOM med det valgte id og gemmer i en variable
    const addTxtComment = document.querySelector('#comment-post');
    const closeDown = document.querySelector('#closeBtn');
    const cross = document.querySelector("#cross");
   
     
    //henter data fra database collection  ved brug af Snapshot
    this.comRef.onSnapshot((snapshotData) => {
      let comments = [];

      //tager alle dokumenter og går igennem dem en ad gang vis forEach metoden
      snapshotData.docs.forEach(doc => {
       let comment = doc.data();
       comment.id = doc.id;
       comments.push(comment);
      });
       //hver dokument bliver kaldt gennem denne funktion og render til DOM
       this.renderComments(comments);
    })

  
    addTxtComment.addEventListener('submit', (e) => {
      
      this.comRef.add({
        comment: addTxtComment.comment.value
      
      });
        // sætter inputfelter til tomme string for at gentarte felter efter indtastning/tryk på knappen "Post"
        addTxtComment.comment.value = " ";
    })

    // lukker comment box ned med comment knappen 
        closeDown.addEventListener('click', (e) =>{
          if(addTxtComment.style.display === "block"){
              addTxtComment.style.display = "none";
            }

      })
      // lukker comment box ned med cross knappen
      cross.addEventListener('click', (e) =>{
        if(addTxtComment.style.display === "block"){
            addTxtComment.style.display = "none";
          }

    })
  
    
  }
  // laver element og render posts til DOM
  renderComments(comments) {
    
    let html1 = "";
    comments.forEach(comment =>{
      html1 += `
        
          <p>${comment.comment}</p>
       
      `;
    });
    document.querySelector("#postC").innerHTML = html1;

  }
 
 
}

const commentService = new CommentService();
export default commentService;


class SearchService {
 search(){
  
  //kalder id af all tags man skal brug og gemmes hver under en konstant varibel
  const allposts = document.querySelector("#post-list");
  const searchBar = document.forms['search-post'].querySelector('#search');
  const titleHead = document.querySelector("#postHead");
  const addpost = document.querySelector("#add-post");
  
  //laver en eventlisterne der lytter til indtasting
searchBar.addEventListener('keyup', (e) =>{

    //retter sig efter værdien af inputfelt i searchbar
    const term = e.target.value.toLowerCase();
    
    //gemme hvert post i en variabel
    const posts = allposts.getElementsByTagName('article');

    //laver en array af alle posts med en array.from metode, da det er en HTML kollektion, efter forEach er metoden
    //at lave en array 
    Array.from(posts).forEach((post) => {
      //callback funktione der kalder tekst værdien af hvert post dvs af h3'er tags 
      const headline = post.firstElementChild.textContent;
      
      //if else argument der tjekker om titlen (headline) har er samme som 
      // den værdi der er i alle posts, med start fra index af hele titel sætningen
      if(headline.toLocaleLowerCase().indexOf(term) !=-1){

        //hvis den er med så viser det frem
        post.style.display = 'block';
      } else{
        //hvis ikke så bliver det gemt
        post.style.display = 'none';
        //fjerner disse tag elementer for kun viser den post man søger efter
        titleHead.style.display = 'none';
        addpost.style.display = 'none';
      }

    })
})
  

}

}
const searchService = new SearchService();
export default searchService;
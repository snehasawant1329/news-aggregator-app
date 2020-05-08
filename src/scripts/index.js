const url ='http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=f9b96e31aaa04ddfaea64ad60891a413';

jQuery(document).ready(async function news(){
         await fetch(url)
        .then((res) => res.json())
        .then((articles) => {
            let output="";
            articles.articles.forEach((articles)=>{
                output += `
                    <li class="article">
                       <img class="article-img" src="${articles.urlToImage}"/>

                       <h2 class="article-title">${articles.title}</h2>

                       <p class="article-description">${articles.description}</p>

                       <span class="article-author">${articles.author}</span>

                       <a class="article-link" href="${articles.url}" target="_blank"></a>
                    </li>
                `;
            });
            document.getElementById("news-articles").innerHTML=output;
        })
        .catch((err) => console.log(err));
    });

    $(document).ready(function(){ 
      $('#search').keypress(()=>{
        let searchField = $("#search").val();
        const url2 = `https://newsapi.org/v2/everything?q=${searchField}&apiKey=f9b96e31aaa04ddfaea64ad60891a413`;
        
        if(searchField !== ""){
          $.ajax({
            url: url2,
            method: "GET",
            dataType: "json",
            
              success: (function(news){
              let output2 = "";
              let articals = news.articles;
              
              for(var art of articals){
                  console.log(articals);
                  //const art = 
                output2 +=`
                  <li class="article">
                      <img class="article-img" src="${art.urlToImage}">
  
                      <h2 class="article-title">${art.title}</h2>
  
                      <p class="article-description">${art.description}</p>
  
                      <span class="article-author">${art.author}</span>
  
                      <a class="article-link" href="${art.url}" target="_blank"></a>
                  </li>
                  `;
              }
              if(output2 !== ""){
                document.getElementById("news-articles").innerHTML=output2;  
              }
              else{
                  $("#news-articles").html("<h1>No article was found based on the search.</h1>");
              } 
            })   
          }); 
        }
      });
  });


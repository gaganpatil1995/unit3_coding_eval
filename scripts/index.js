// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar,sidebar } from "../components/navbar.js";
 
let nav = document.getElementById("navbar")
nav.innerHTML = navbar()
let side = document.getElementById("main")
side.innerHTML = sidebar()

let search = document.getElementById("search_input")
search.addEventListener("keydown",showNew)





function showNew(e){
    if(e.key=="Enter"){
        let val = search.value ;
        localStorage.setItem("value",val)
        window.location.href ="../search.html"

        
        
    }
}

let country = document.getElementById("country").children

for(let x of country){
    x.addEventListener("click",countryNews)
}

function countryNews(){
    let f = this.id
    console.log(f)
    getData(f)
}
async function getData(sideData){
    
   let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${sideData}`) ;
   let data = await res.json() ;
 //   console.log(data)
  
     append(data.articles)
 
 }

 function append(data){
    let results = document.getElementById("results")
    results.innerHTML = null
  data.map(function({title,description,urlToImage}){
//  console.log(url)
let main_div = document.createElement("div")
main_div.setAttribute("class","news")
  let image = document.createElement("img")
  image.src = urlToImage
  let h3_div = document.createElement("div")
  h3_div.addEventListener("click",function({title,description,urlToImage}){
      showDetail({title,description,urlToImage})
  })
  let h3 = document.createElement("h3")
  h3.innerHTML = title
  let p = document.createElement("p") ;
  p.innerHTML = description
  h3_div.append(h3,p)
  main_div.append(image,h3_div)
  document.getElementById("results").append(main_div)
     })
}
function showDetail({title,description,urlToImage}){
    console.log(urlToImage)

}





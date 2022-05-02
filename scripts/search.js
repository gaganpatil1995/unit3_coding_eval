// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar,sidebar } from "../components/navbar.js";
 
let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

let val = localStorage.getItem("value")
console.log(val)
let search = document.getElementById("search_input")
search.addEventListener("keydown",showNew)

async function getData(){
   let dat = localStorage.getItem("value") ||[]
  let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${dat}`) ;
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
main_div.style.height= "auto"
main_div.style.width = "auto"
main_div.setAttribute("class","news")
  let image = document.createElement("img")
  image.src = urlToImage
  let h3_div = document.createElement("div")
//   h3_div.style.height = "100px"
//   h3_div.style.width = "auto"
  h3_div.addEventListener("click",function(){
      showDetail(this.urlToImage)
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
function showDetail(url){
    console.log(url)

}

getData()

function showNew(e){
    if(e.key=="Enter"){
        let val = search.value ;
        localStorage.setItem("value",val)
    
        
        window.location.href ="../search.html"
      
        
    }
}
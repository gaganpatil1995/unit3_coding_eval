function navbar(){
    return `
    <h1 id="head">NEWS</h1> 
    <input type="text" id="search_input">`

}
function sidebar(){
    return `<div id="sidebar">
    <h2>Countries</h2>
    <div id="country">
    <h3 id="in">India</h3>
     <h3 id="ch">China</h3>
    <h3 id="us">USA</h3>
    <h3 id="uk">UK</h3>
    <h3 id="nz">Newzeland</h3>
    </div>
    
    
    
  </div>
  
  
  <div id="results"></div>`
}
export{navbar,sidebar}

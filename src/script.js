document.addEventListener("DOMContentLoaded", function(){
// selecting node // accessing the element 
let heading = document.getElementById("heading")
console.log(heading)
let paragraph = document.getElementsByClassName("text")
console.log(paragraph[0])


// listening for click event on the nav link 
const myList = document.getElementById("myList")
console.log(myList)
myList.addEventListener("click", function(event){
    //  what do you want to happen.
// manipulating nodes 
//changing content(Text Node) .textContent 
heading.textContent = "Menu Clicked , Please Wait..."
// changing attributes .setAttribute 
heading.setAttribute("class", "classdynamic")
//styling directly .style
document.body.style.backgroundColor = "red"
paragraph[0].style.color = "yellow"

//creating an element .createElement
// add it to the document 
let newButton = document.createElement("button")
newButton.textContent = "Click Me"
let sectionArticle  = document.getElementById("article")
console.log(sectionArticle)
// document.body.appendChild(newButton)
sectionArticle.appendChild(newButton)
// removing elements  .removechild 
let headersection  = document.getElementById("header")
document.body.removeChild(headersection)

})

})
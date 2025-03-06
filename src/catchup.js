const basketballPlayer = {
    name: "lebron James",
    team: "LA Lakers",
    position: "Forward",
    height: "6ft 9in", 
    pointPerGame: 27.2
}
// iteration : repeating an execution of code a set number of times or until a given condition is met 
// 1. for .... in 

for(let x in basketballPlayer){
    console.log(`${x} => ${basketballPlayer[x]}`)
}
// 2. Object.keys() with forEach() method
Object.keys(basketballPlayer).forEach(x => {
    console.log(`${x} => ${basketballPlayer[x]}`)
})

//3. Object.entries : get an array of key and value pairs , useful for destructuring 
Object.entries(basketballPlayer).forEach(([key,value]) => {
    console.log(`${key} => ${value}`)

})

// Functions : Declaration , callbacks , and Scopes 
function printPlayerStats(player){
     let printMsg = `Player : ${player.name}, Team: ${player.team}, PPG: ${player.pointPerGame}`
     console.log(printMsg)
     return printMsg
}
printPlayerStats(basketballPlayer)

// callbacks : a callback function is a function passed as an argument to another function
// and executed later // mostly used for asynchronous operations (fetching data from servers, event handling)
function processPlayer(player, x){
     console.log("Processing Player....")
    //  indication of a callback in a function
     x(player)
}
// calling and passing my callback 
processPlayer(basketballPlayer,printPlayerStats)

//scopes (global, local , block , lexical scoping)
 // global : any variable defined outside a function // accessible anywhere after initialization
let myName = "Joseph"

function showScope(){
    // local : any variable defined within a function // accessible only inside the function
    // variable ref. is destroyed immediately the function is executed 
    let localVariable = "Local Scope"
    myName = "Alice"
    console.log(myName)
    console.log(localVariable)
}
showScope()
console.log(myName)
// console.log(localVariable)

// block scope : variables declared inside curly braces {} are accessible within that block
function game(){
    let team = "Lakers" // function/local scope
    if(true){
        let player = "Lebron James"
        console.log(`${player} plays for the ${team}`)

    }
    // console.log(player)
}

game()

// LEXICAL SCOPING : a function can access variables from its outer (parent) scope where it 
// was defined , not where it was called 
function createBasketBallPlayer(name, team){
    let pointsPergame = 25 //local scope / variable in the outer function 

    function displayStats(){
        // can access the name , team , points 
        let innerVariable = "Inner scoped variable"
        console.log(`${name} - ${team} - ${pointsPergame}`)
    }
    console.log(innerVariable)
    return displayStats()
}
createBasketBallPlayer("Steph Curry", "GSW")



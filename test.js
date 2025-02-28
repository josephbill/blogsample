// // when variables are defined outside functions they then have a global scope 
// // they are accessible anywhere in the file even in the block scopes like functions 
// const global_scope  = "Global Scope"
// let changing_variable = "This is supposed to change"
// // functions : block of code to execute a specific task 
// // syntax for writing a function will look like this 
function printGlobalScope() {
    changing_variable = 10
    console.log("Inside the function " , global_scope)
    console.log("Changing variable " , changing_variable)
    // the code in here are only related to the function

}

// // invoke/call function  
printGlobalScope()
// console.log(global_scope)
// console.log(changing_variable)

// // Local/Function scope 
// function printLocalScope(){
//     // variables declared inside functions are onlu accessible inside the functions 
//     // variables inside here are destroyed on function execution completion. 
//     let local_variable = "This is a local variable"
//     console.log(local_variable)
// }

// printLocalScope()
// console.log(local_variable)

// this program prints out if a user is allowed to vote or not 
let age = 18 

// syntax of the if statement
// > , < , >= , <= , ! , || , &&
if(age >= 18){
    //  this block of code will execute only if the condition is true 
    // the condition in if statements should always evaluate to true. 
    console.log("You are allowed to vote")
} else {
    // this is executed if the if statement is not evaluated 
    console.log("Age is not of the required level.")
}

let name  = prompt("Here we go ")
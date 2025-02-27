// to call / invoke 
// true is a function argument which will be mapped in position with the parameter at declaration
console.log(greet('joseph',"j@j.com" ))
// best
// function declarations 
// functions with parameters 
function greet(name, email){
    return `Hello , ${name} , ${email}`
}

// function expressions 
const add = function(a,b){
     return a + b 
}
const result1  = add(10,10)
console.log(result1)
console.log(add(20,10))

// Hoisting with var 
// variables declared with var are hoisted but initialized as undefined 
console.log(a)
var a = 10
console.log(a)

// Hoisting with let and const 
// these variables are hoisted but not initialized leads to a reference error (temporal dead zone)
// console.log(b)
let b = 20
console.log(b)


// Arrow functions 
const multiply = (a,b) => {
    return a * b 
}
console.log(multiply(5,5))

const division = (a,b) => a / b 
console.log(division(10,5))
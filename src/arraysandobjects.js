// // referencename = []
// const fruits = ["Apples", "Bananas", "Grapes"]
// console.log(fruits)
// // Access of elements in arrays 
// // via index position , are counted from 0 
// console.log(fruits[2])
// // array operations 
// // .length to get size of array 
// console.log(fruits.length)
// console.log(fruits.push("Mango"))  // add new element to the array and returns a new size for the array
// console.log(fruits.unshift("Pear")) // adds the new element to the beginning of the array it returns the new array
// console.log(fruits.pop()) // removes the last item from the array and returns that item.
// console.log(fruits) 
// console.log(fruits.shift()) // removes the first item from the array and returns that item.  
// // .map , .reduce , .filter // 
// console.log(fruits)

// // const filteredFruits = fruits.filter()

// OBJECTS 
// unordered collection of key and value pairs , where the keys(properties) are strings or symbols 
// use objects to represent single entity 
let user = {
    username: "Joseph",
    userRole: "IT Lecturer",
    userEmail : "joseph@moringaschool.com",
    userID:  "ABC"
}
// access to access values in an object 
// access using the dot notation ( objectname.propertyname/keyname) , or square brackets ["keyname"]
console.log(user.username)
console.log(user["userRole"])

let moringaStaff = []
let user2 = {
    username: "Alice",
    userRole: "IT Lecturer",
    userEmail : "alice@moringaschool.com",
    userID:  2392
}
// modify object properites 
user.username = "Joshua"
// add new properties 
user.location = "Nairobi"
// checking keys 
console.log(Object.keys(user))
// check the values directly 
console.log(Object.values(user2))
moringaStaff.push(user)
console.log(moringaStaff)
moringaStaff.push(user2)
console.log(moringaStaff)

// for...in loop
// Trasverse or looping collections 
// for loop 
// while loop 
// do..while loop 
// for...in for object 
function logShout(string){
    // validate data here ensure string 
    return string.toUpperCase()
}
for(let key in user){
    console.log(`${key} => ${user[key]}`)
    console.log(logShout(user[key]))
}
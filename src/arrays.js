// two types of arrays :: 
// Immutable // non-destructive array (Create New Array reference)
// .map -> transform each element in the array according to logic provided 
const numbers = [1,2,3,4,5]
const doubled = numbers.map(num => {
    return num * 2
})
console.log(doubled)
let newArray = []
for(let i = 0; i < numbers.length; i++){
     let result = numbers[i] * 2
     newArray.push(result)
 }
console.log(newArray)
// .filter() => 
function findMatching(drivers, name){
        const nameLower = name.toLowerCase();
        return drivers.filter(driver => driver.toLowerCase().includes(nameLower));
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
console.log(findMatching(drivers, "Bobby"))

// .slice => extract a portion of an array 
// Question => destructure a string into an array of characters 
// Date()  "12/3/2025 08:09:30" ["1","2","/",
// ]  // check how to format timestamp using slice 
const fruits = ["apple","banana","Cherry","Dates","berries"]
const slicedFruits = fruits.slice(1,3)
// slice(startindex , exclusion index)
console.log(fruits)
console.log(slicedFruits)
// .concat() : merges two arrays 
// .reduce() : reduces arrays to a single value

// non-destructive : create new array reference , the original array is not altered 

// destructive : modify the original arrays 
// .push() appends new element to the end of the array 
// .pop() removes the last element in the array and returns it 
// .shift() removes the first element and return it 
// .unshift() appends new element to the beginning of the array 
// .splice() removes or add elements 
const months = ["Jan","March","April","June"] // febuary 
// .splice(start(add new element here), (deletecount)
// default index to start from , 
// element to add)
months.splice(1,0,"Feb")
console.log(months)
months.splice(4,0,"May")
console.log(months)
months.splice(2,1, "Dec")
console.log(months)
// remove a month .splice(position of what to remove, deletecount)
months.splice(2,1)
console.log(months)
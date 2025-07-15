// primitiv data types
let s = "wafi"
let nummber = 9999
const isLoggedIn = false;
let userEmail;
const outsideTemp = null



// symbol
const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id === anotherId);

// bigInt 
const bigNumber = 3434555432554299393939n // just place n in last it is converted in to bigInt


// primitive and referance
// array
const heros =['wafi' , 'hello']

// object
let myObj = {
    name : "haist",
    age : 33,

} 

// function
const myFunction = function(){
    console.log('hello world')
}



// ///==================================================================


// stack , heap

let myYotubname = "wafi"

let anothername = myYotubname;
anothername = "cjii"

console.log(myYotubname);
console.log(anothername); 


// heap

let userOne = {
    name : "wafi",
    age : 33
}
let userTwo = userOne

userTwo.name = "sajid"

console.log(userOne.name);
console.log(userTwo.name); 
let score = "false"
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


// what is the typeof data types of conversion
//"33"=> 33 number
// "33ss" => NaN
// true => 1 false => 0

let IsLoggedIn = ""
let booleanIsLoggedIn = Boolean(IsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
//"" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)


//***************operations*****************/

let value = 3
let negValue = -value
console.log(negValue)


// basic operations
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2%2)
// console.log(2/2)

let str1 = "Nice"
let str2 = " Shirt"
let str3 = " Wafi"
let str4 = str1 + str2 + str3
console.log(str4)



console.log('1' + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); //this ans will be a 122 because of string conversion
console.log(1 + 2 + '2'); // but here the ans will be a 32


console.log((3 + 4) * 5 % 3); //write a code like this


//boolean conversion

console.log(+true) //the ans will be a 1
console.log(+"") // the ans will be a 0


// in some time code will written in this form

let num1 , num2 ,num3
num1 = num2 = num3 = 2+2


let gameCounter = 100
gameCounter++; //some time written in ++gameCounter
console.log(gameCounter)
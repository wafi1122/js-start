const name = "hitash"
const repoCount = 45;


// console.log(name + repoCount + "value");//we can concanate strings like this but abother method we have avaiable.

// another method

console.log(`hello my name is ${name} and my repo is ${repoCount}all about me`);

// another method of adding string 
const gameName = new String('wafi-trrrr');

console.log(gameName[0]); //show us the letter on its index number
console.log(gameName.__proto__);

console.log(gameName.length); //it will show us the lenght is string
console.log(gameName.toUpperCase()) // it will convet to uppercase
console.log(gameName.charAt(2)); //we have to put the number and it show us the charater 
console.log(gameName.indexOf("t")); //just we have to write the charater it will tell us the index os that number.

const newString = gameName.substring(0 , 3); //we have to start point and end point and then it will print the character.
console.log(newString)

const anotherString = gameName.slice(-8 , 4); // we will also add a negative numbers here it start form the end of the string
console.log(anotherString);


const newStringOne = "    hitasg    "
console.log(newStringOne);
console.log(newStringOne.trim()); // by using trim we can remove spaces that we donot want to stired from data base.


const url = "https://wafi.com/wafi%20khan"
console.log(url.replace('%20' , '-'));  //replace is use to replace any thing in any string


console.log(url.includes('sunder')) // the include purpose is we can find any thing is found in string or not;

console.log( gameName.split('-')) // we can use for many things we can convert into an array or we can find a word character. etc]




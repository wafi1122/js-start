const score = 500;
console.log(score); // these both are numbers but the "new Number" is like a "new string" type some time we hava a number which is send from api but we do not know it is the number or a string then we can use this.


const balance = new Number (500); 
console.log(balance); //the intresting thing is the new number and score data types are not equal

const compara = score === balance;
console.log(compara) // the ans is false



console.log(balance.toString().length); //now it is converted to the string.
console.log(balance.toFixed(3)); // the "toFixed" is use to add 00 after the decimal point we can use this int the commerse website.



const otherNumber = 1223.934
console.log(otherNumber.toPrecision(4)); // the toprecision method is use to round off the  values but becareful to give number according to variable number


const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')) // the toLocalString is used to add commes in a large number but we also can connvert to different la




//++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); // the number which are in the negative bunber they are converted into the positive . -4 = 4
console.log(Math.round(4.6)); // the round method is used to round off the number .
console.log(Math.ceil(4.2)); //
console.log(Math.floor(4.9)); //
console.log(Math.min(4,5,3,5,7,8)); // this is use to find the min number in the array
console.log(Math.max((4,3,5,7,8,5,3))) // this method is used to find the max valur in the array.

console.log(Math.random()) // it will choose the random number between 0 to 1
console.log(Math.random() * 10 + 1); // we can use this to shift a number like 1 4 6 etc
console.log(Math.floor(Math.random() * 10) + 1); //we can use this formula to avoide the dacimals numbers and converted to full number.


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);






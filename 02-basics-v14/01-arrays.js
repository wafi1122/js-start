// arrays

const myArr = [ 1,2,3,4,5]
const myHeros = ["wafi", "hitash","sigma"];

const myArr2 = new Array(2,4,5,3,2) // we can also define arrrays like this we can use brackets.
// console.log(myArr[0]) //  


//araay method

// myArr.push(6); //use to push the value in array
// myArr.pop() //use to remove the last element from the array


// myArr.unshift(9); //add a number in the start
// myArr.shift(); //remove the firt element from array
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); //if we can gave in correct index number which is not present in the array it will show us -1 ,
 

const newArr = myArr.join() //it is the method in which we can join array but the newarray elements are converted into the string.
// console.log(myArr);
// console.log(typeof newArr) 



// slice and splice

console.log("A" , myArr);
const myn1 = myArr.slice(1 , 3);

console.log(myn1);
console.log("b",myArr)


// splice

const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);


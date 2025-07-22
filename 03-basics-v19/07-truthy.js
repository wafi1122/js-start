// truthy values are those values in which we have to assume that the any thing in the string is true
const userEmail ="wafi@1122.com";
if(userEmail){
    console.log(" Got user email");

} else{
    console.log("Don't have user email");

}
 

// falsey values and truthy values

// false. 0 , -0 , bigInt 0n , null , undefined,NaN 

// truthy values
// "0" , 'false, " ", {},[], function(){} 

// if (userEmail.length === 0 ){
//     console.log("array is empty")
// }

const emptyObj = {};
if ( Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}

//nullish coalesscing operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

const iceTeaPrice = 100;
iceTeaPrice <=100 ? console.log("less than 80") : console.log("greater then 80");
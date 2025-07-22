//if
const isUserloggedIn = true;
const temperature = 41;

if ( temperature < 50 ){
    console.log("less then 50")
}else{

    console.log("temperature is greater than 50")
}
console.log("executed")
// < , >, >= , ==, === , !== , <=



const scor = 200
if ( scor > 100){
    let power = "fly"    // if we use var here it scop is global and we can access it from anywhere
    console.log(`user power is ${power}`);

}
// console.log(`user power is ${power}`);


// what id the short hand notation

const balance = 1000;

// if (balance > 500) console.log("test 1"); //we can write code like this but it is  not a good practice for any student .

// else if


if ( balance < 500){
    console.log("balance is less than 500");

}else if( balance < 750){
    console.log("balance is less than 750")
}else if(balance < 900){
    console.log("balance is less than 900")
}else{
    console.log("balance is greater then 1000")
}

const userLoggedIn = true;
const debitCard = true ;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){ // we can use mutiple &&  and if both are true then it enter in the blck
    console.log("you can shopping")
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("you can login")
}
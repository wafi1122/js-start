// what is the function when we have too many thing and we will get thenm in the one container so this is a simpllay a function.
function sayMyName() {
    console.log("w");
    console.log("a");
    console.log("f");
    console.log("i");
}

// sayMyName();   //() are use to excitude a dunction. 

 
// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1 , number2){
    let result = number1 + number2 //1 mthod
    return number1 + number2 // 2 method we can also do like this.
    return result  //what ever i get the result retutn it when we can write a code a after return it will not run because return stop the excutition.
}
const result = addTwoNumbers(3,5);

// console.log("results : ",  result)


function loginUserMessage(username){
    if(!username){  // !username and username === workinfg is same  
        console.log("plaease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("wafi"))
console.log(loginUserMessage())




// rest operator : when we have too much of data comming from api so we can use this


function calculateCartPrice(...num1){ //it will give us all the values in the array
    return num1
}
console.log(calculateCartPrice(200,344,53,2333,555))


const user = {
    username : "hitash",
    price : 233,
}

function handleObject(anyobject)  {
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)

}


 
// handleObject(user);

handleObject({   //we can also pass the object like this 
    username : "sam",
    price : 4545
})


const myNewArray = [200 , 400 , 300, 500]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray))
conaole.log(returnSecondValue([200,400,533,6555,,322]))





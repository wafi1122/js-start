const user = {
    username : "hitasg",
    price : 666,
    welcomeMessage:function(){
        // console.log(`${this.username},welcome to website`);
        // console.log(this);
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);

//  can we use' this ' in the functions .no
// function chai(){
//     let username = "hitasf"
//     console.log(this.username);
// }

// ===============================Arrow function================================
const chai = ()=> {
    let username = "hitasf"
    console.log(this);
}

chai()

// const addTwo = (num1 , num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,4));

 
const addTwo = (num1 , num2) =>  ({username:"eadf"})
console.log(addTwo(3 , 4)) 
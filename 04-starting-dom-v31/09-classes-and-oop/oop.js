const user ={
    username : "wafi",
    loginCount : 8,
    signedIn: true,

    getUserDetails : function(){
        console.log(`username: ${this.username}`) //when we have have to refer out side of the elementin function especially in the object literal we have to use this keyword to refer it with out this it will not show the result we want to see
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())
// console.log(this)

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this
}
const userOne = new User('wafi',12,true)
const userTwo = new User('chai',11,false)
console.log(userOne.constructor)
console.log(userTwo)
//singleton

//a object which is cereated through the constructor


// two methods of cereating objects objects
// 1.
// Object.create

// 2.
// object literals
// const mySym = Symbol("key1")
const JsUser = {
    name : "Hitesh",
   "full name":"jisat",
    age : 84,
    // [mySym] : "myKey1", // we have to use square braces because to refer the symbol from outside
    location : "gilgit",
    isLoggedIn : false,
    email: "wafi@gmail.com",
    lastLoginDays : ["monday","tuesday"]
}


console.log(JsUser.email);  //this is  also a method but we will disscuss more
console.log(JsUser["email"]);
console.log(JsUser["full name"])
console.log(JsUser[mySym])



  
JsUser.email = "wafitr@gmail.com"
// Object.freeze(JsUser) //use to freez the js all keys and objescts
JsUser.email = "wafitttt@gamil.com" // it does not show error but the email is freeze so the emaol is not change
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`hello Js User ${this.age}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())








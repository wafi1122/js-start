// let myName = 'hitash    '
// let myChannel = 'chai  '


// console.log(myName.trueLength)

let myHeros =['ironman','spiderman']

let heroPower = {

}
Object.prototype.wafi = function(){
    console.log(`wafi is present in all objects`)
}
Array.prototype.hellowafi =function(){
    console.log(`wafi says hey`)
}


// heroPower.wafi()

myHeros.wafi()
myHeros.hellowafi()
// heroPower.hellowafi()


const User ={
    name : 'chao',
    email : "cja@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeacherSupport = {
    isAvaiable : false
}

const TASuppot = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

//modren syntax

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
"icetea".truelength()


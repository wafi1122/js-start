class User{
    constructor(username){
        this.username = username

    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const hitash = new User('hitesh')
console.log(hitash.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;

    }

}
const iphone = new Teacher('iphone' , "i@phonhmai")
console.log(iphone.createId()) 

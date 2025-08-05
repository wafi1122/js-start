class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){  // important note  when we define the getter we have also find the setter also
        return `${this._password} hitesh ` // we have to write underscore befour set and get password because it shows an error 
    }
    set password(value){
        this._password = value 
    }
}

const hitesh = new User('wafi@gmail.com',"wafi")
console.log(hitesh.email)
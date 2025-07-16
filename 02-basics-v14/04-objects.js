// two ways of define objects

// 1.
const tinderUser = new Object()
//2.
const tinderUser1 = {}


tinderUser.id = "2333@dd"
tinderUser.name = "wafi"
tinderUser.isLoggedIn = false;

// console.log(tinderUser1)
// console.log(tinderUser)




const regularUser = {
    email : "something@gmail.com",
    fullname : {
        userfullname : {
            firstname : "wafi",
            lastname : "uddin",
        }
    }

}
// important note if we donot found a user name we can add "?" if we canot get data from api
// console.log(regularUser.fullname.userfullname.firstname) //


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj4 = {5 : "r" , 6 : "y"}


// const obj3 = {obj1 , obj2} //by using this we found a problem like a array we found object in the object.
// const obj3 = Object.assign({},obj1,obj2,obj4) 
const obj3 = {...obj1,...obj2,...obj4} //this is the best formula for the use of mearge the objects or a array.
console.log(obj3);

//if we get data from the api then we can found the data in this form

const users = [
    {
        id : 1,
        email : "wafi@124"

    },
    {
        id : 1,
        email : "wafi@124"

    },
    {
        id : 1,
        email : "wafi@124"

    },
    {
        id : 1,
        email : "wafi@124"

    }
]

users[1].email;

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // we can access keys of a object by using this method
console.log(Object.values(tinderUser)); // we can access valuse by using this method
console.log(Object.entries(tinderUser)); //we can raerly use this method

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //by using this we can find this the key is avaiable in the obbject otr not.



const course = {
    coursename : "hindi",
    price : "444",
    courseInstructor : "wafi"
}

// course.courseInstructor

// if we have longs keys name then we can destructure it and make it short
const{courseInstructor:instructor} = course; //if we found some thing in curly braces inn function so that means it is destructuring 

// console.log(courseInstructor);
console.log(instructor); 



// some time we can get get data in the form of array .



// this form is the json form. all object are the json form.
// {
//     "name" : "wafi",
//     "class" : "3",
//     "gmail" : "wafi@123"
// }    
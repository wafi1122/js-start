// dates


let myDate = new Date()
console.log(myDate)

console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(myDate.getTimezoneOffset())
console.log(typeof myDate)



// let myCreatedDate = new Date(2023, 1 , 23);
// let myCreatedDate = new Date(2023,0,23,5,6);
let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //we can also get date by this method
console.log(myTimeStamp); //it will show us the milliseconds
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/ 1000)); //to convet from milli sexonds to seconds


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()) // we will get month
console.log(newDate.getDay());



// too much used 

newDate.toLocaleString('default ',{
    weekday: "long"
}) //we can custimioze the date more like we want.
















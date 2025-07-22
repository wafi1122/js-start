// for of

//["" , " ", ""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr){
    // console.log(`value is :${num}`)
}

const greetings= "hello world"

for(const greet of greetings){
    if (greetings === " ") {
        console.log("space is deceted")
        break;
    } 
    console.log(`greeting is: ${greet}`)
}

//maps

const map = new Map();
map.set('IN' , "India")
map.set('USA','united states of america');
map.set('UK','united kingdom');


console.log(map);

for(const[key , value] of map ){
    console.log(key,':-', value);
}


// in this we figure out the object key and values are not iterable
const myObject = {
    game1 : 'nfs',
    game2 : 'fifa',
}
for(const [ key , value] of myObject){
    // c  onsole.log(key, ':' , value);
}


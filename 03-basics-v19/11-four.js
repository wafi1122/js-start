const myObject = {
    js : 'javascript',
    py : 'pythone',
    cpp : 'c++',
    swift : 'swift by apple',

}
for (const key in myObject){
    console.log(`key${key} shortcut is for ${myObject[key]}`)
}

const programming = ['js','rb','py','java','cpp']
for (const key in programming){
    // console.log(programming[key])
}

const map = new Map();
map.set('IN' , "India")
map.set('USA','united states of america');
map.set('UK','united kingdom');
for (const key in object){
    // console.log(key)
}

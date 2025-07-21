// immediately Invoked function expression (IIFE)

(function chai(){
    console.log(`DB connected`);

})(); // we have to use semi colon because iffe executition does not stop


((name)=>{
    console.log(`DB connected R${name}`)

})('wafi')
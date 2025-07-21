let a = 499
if(true){
    let a = 10; 
    const b = 20;
    var c = 30;
    // console.log("iner",a)
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "wafi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}
// one()  // so what we found here we can acces the parent elements but papent will not access child elements.


if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}
//console.log(username)


//======================================intresting===========================================
addone(5);  

function addone(num){// in this we can put the ccall function and it will run perfectly
    return num + 1
}



// addTwo() // but we can not do it here it would not do it here.  
const addTwo = function(num){
    return num + 2
}



















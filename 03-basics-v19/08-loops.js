// for loop

for (let i = 0 ; i < 10 ; i++){
    const element = i;
    if(element == 5){
        console.log("5 is not allowed");
    }
    console.log(element)
}

//we can use loop inside loops

for ( let i = 1; i<= 10; i++){
    console.log("outer loop value", i )
    for(let j = 1 ; j<= 10 ; j++){
        // console.log("inner loop value", j)
        // console.log(i + "*" + j + "="+(i * j))
    }
}

let myArray = ['flash','superman','ironman']
console.log/(myArray.length);
for(let index = 0 ; index<=myArray.length; index++){
    const element = myArray[index];
    console.log(element)
}

for (let index = 1; index <20 ; index++){
    if(index ==5 ){
        // console.log("5 is detected");
        break; //break will stop the loop
    }
    // console.log(index)
}

for (let index = 1; index <20 ; index++){
    if(index ==5 ){
        console.log("5 is detected");
        continue; //break will countinue  the loop withot executing the next line.
    }
    console.log(index)
}
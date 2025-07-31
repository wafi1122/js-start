const promiseOne = new Promise(function(resolve , reject){
    //do an asyns task
    //db calls craptography , network
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)
}) 
promiseOne.then(function(){
    console.log('Promise consumed')
})


// second method 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },3000)
}).then(function(){
    console.log('asyn 2 resolved')
})

// third promise 

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@code.com"})
    },5000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"hatish",password:'112233'})
        }else{
            reject('ERROR: something went wrong')
        }
        
    },6000)
})
promiseFour.then((user)=>{

    console.log(user);
    return user.username

}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log('The promise is either resolved or rejected'))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Javascript",password:'112233'})
        }else{
            reject('ERROR: JS went wrong')
        }
        
    },6000);
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('E'.error)
        
    }

}
getAllUsers()


// using .then and catch method  we can also fetch the data

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})


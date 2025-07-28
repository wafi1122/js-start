const clock = document.getElementById('clock')
//we can also get it by the query selector
// const clock= document.querySelector('clock')

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
},1000)
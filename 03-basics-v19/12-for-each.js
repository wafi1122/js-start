// for each loop

const coding = ['js','ruby','py','java','cpp'];

coding.forEach(function(item ){
    console.log(item);
})

coding.forEach( (item) =>{
    console.log(item);
})

coding.forEach( (item,index,array)=>{ // we can not axxess only items we can also access index and array
    console.log(item,index,array)
    
})

const myCoding = [
    {
        languageName : 'javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    },
    {
        languageName : 'cpp',
        languageFileName : 'cpp'
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName)
})
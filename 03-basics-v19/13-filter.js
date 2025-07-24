const coding = ['js', 'ruby', 'python', 'java']


const values = coding.forEach((item)=>{
    // console.log(item);
    // return item.length // this is shoe us undefined because foreach does not return any value

})
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//     return num > 5 ;
// })
const newNums2 = []
myNums.forEach((num) => {
    if (num > 5){

        newNums2.push(num)
    }
})


console.log(newNums2)

// console.log(newNums);
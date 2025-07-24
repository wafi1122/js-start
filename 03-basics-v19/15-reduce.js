const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc, currval){
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval;
},0)

//same worl in the arrow function
// const myTotal = myNums.reduce((acc , curr) => acc + curr,0)
// console.log(myTotal)


const shoppingCard = [
    {
        itemName : ' mobile',
        price : 1000, 
    },
    {
        itemName : ' kit',
        price : 5555, 
    },
    {
        itemName : ' dasi',
        price : 4343, 
    },
    {
        itemName : ' sung',
        price : 54, 
    }
]

const totalPrice =shoppingCard.reduce((acc,item) => acc+item.price,0)
console.log(`total price is : ${totalPrice}`);


shoppingCard.forEach((item) => {
    const itemName =
    console.log(itemName)
})
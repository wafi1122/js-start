const marval_heros = ["iron-man","spiderman","thor"];
const dc_heros = ["superman", "batman","aquaman"];

// what happend if we push marval heros to dc heros


// marval_heros.push(dc_heros);
// console.log(marval_heros)


const allHeros = marval_heros.concat(dc_heros)
console.log(allHeros);


// the another method of concat
const all_new_heros = [...marval_heros,...dc_heros];
console.log(all_new_heros)

// what if we have arrays ins side array how we can arrange it

const another_array = [1,2,4[4,7,5],6,4,[6,9,0[54,6,4,[5,7,8]]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array)



console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"})) //if it is not find the string in array it will return the empty string

// what if we have many variables and we want to convert in to array?
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



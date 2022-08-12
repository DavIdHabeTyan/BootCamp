/*
 // -----------------------   destructuring  JavaScript
const obj = {
   name: "asd",
   age: 4574,
   balance: 451214
};

// --objecti meji key vekalelu hamar grum enq
const {name, age} = obj
console.log(name)
console.log(age)
*/

// ---ete object@ nestida apa vekalum enq kay-@ ayspes
//---orinak
const people = {
   name: "David",
   age: 23,
   phone: 45712,
   info: {
      address: "Yerevan12"
   }
}
console.log(people)
const {info: {address}} = people;
console.log(address)

// --- Objecti meji key@ vekalenq bayc urish popoxakan veragrenq
// --- Orinak

const {name: otherName} = people;
console.log(otherName)



function getAge(...args) {
   console.log(typeof args)
}

getAge(25); // output => object
///this Scope
/*
function foo(fn) {
   fn(this)
}
function logger(arg) {
   console.log(arg);
}
const obj ={
   word: "Hello",
   foo,
};
obj.foo(logger)

 */


// ----Exercise Array Method link  -  https://coursework.vschool.io/array-map-exercises/


//// (--Filter--)  (--Map--)  find name



let arr = [
   {
      name: "Angelina Jolie",
      age: 80,
   },
   {
      name: "Eric JOnes",
      age: 2,
   },
   {
      name: "Paris Hilton",
      age: 5,
   },
   {
      name: "Bob Ziroll",
      age: 100,
   }
]
// function findName(list) {
//  return list.filter(item => item.age > 80).map(elem => elem.name)
// }
//
// console.log(findName(arr))





//exercise 05
// Make an array of strings of the names saying whether or not they can go to The Matrix
function addedStringInArray(list){
   let filter = list.filter(filterAge => {
     return  filterAge.age > 50
   }).map(elem => {
      return `${elem.name} can go to The Matrix`
   })
   return filter
}

console.log(addedStringInArray(arr))

//  (--Map--)

// exercise 06
// Make an array of the names in h1s, and the ages in h2s
/*
function changeList(list) {
   return list.map(elem => {
      return `<H1>${elem.name}</H1><h2>${elem.age}</h2>`
   })
}

console.log(changeList(arr))



 */



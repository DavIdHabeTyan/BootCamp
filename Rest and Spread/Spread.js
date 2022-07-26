let arr = [1, 2, 3];
let arr2 = [4, 5, 6]

let result = [...arr, ...arr2];
console.log(result)

//// --- kanon Object@ ITERABLE chi ev chi ashxatum operator Spread -@



let obj = {
   name: "asd",
   age: 42,
}
//  let clon = [...obj] /// Error object is not iterable;

let clone = {...obj}; /// clone e anum object@  {...Obj} === Object.assign()


/// how to delete key in object

obj.password =  "asdasd";

const {password, ...rest} = obj;

console.log(rest) /// aystex jnjel enq password key-@.
console.log(password) // aystex miayn passwordn e.
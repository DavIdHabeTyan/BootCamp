///--------------- Lesson 1
let people = {
   name: "Joe",
   age: 23,
   phone: 89745841,
};

Object.keys(people).forEach(key => {
   let val = people[key];
   console.log(val + " " + key)
})


// ------- Object.entries() --- Return String Object Keys and Values
// -------- Object.keys() ---- Return Object Keys
// --------- Object.values() --- Return Object Values

let str = JSON.stringify(people)
console.log(JSON.stringify(people));  //  --- Object convert to String
console.log(JSON.parse(str)) /// --- String convert to Object



// -----------   Lesson 2

let person = {
   name: "Edgar",
   age: 32,
   friends: [
      "Mike", "Joe", "Xavi"
   ],
   sayHi: () => {
   console.log("Hi")
}
};

console.log(JSON.stringify(person, undefined, 2)); /// return person Object and convert Object to String
JSON.stringify(person, undefined, 4) /// JSON have two values, Undefined and number. number is a probel length

/// if Object have a function, JSON can not convert Function it is important RULE
//JSON converted only string, Function it is a LOGIC;
person.sayHi()
// function User(name, lastName){
//    this.name = name;
//    this.lastName = lastName;
//
//    this.fullName = () => {
//       console.log(` Hello ${this.name} ${this.lastName}`)
//    }
// }
// let user1 = new User("David", "Habetyan");
//
// console.log(user1.fullName())



function Car(model, year) {
   this.model = model;
   this.year = year;

   return {
      model: "Mercedes",
      year: 2022
   }
}

const bmw = new Car("BMW", 2020);

// console.log(bmw)  // output {model: "Mercedes", year: 2022}

function getAge(...args) {
   console.log(typeof args);
}

getAge(25); /// output => object

function Person() {
   this.name = "John";
   return "Jane";
}

const a = new Person();
console.log(a) // output => {name: "John"};


function Person1() {
   this.name = "Bill";
   this.age = 25;

   return {
      name: "John"
   }
}

const b = new Person1();
console.log(b) // output => {name: John, age: 25};

console.log(isNaN("2022"))


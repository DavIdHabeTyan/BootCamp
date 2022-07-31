


// ----  -- Object.assign() -----

const obj1 = {
   name: "Dav"
};
const obj2 = {
   age: 32,
}

let margeObject = Object.assign(obj1, obj2);
console.log(margeObject)


////////// ------------Object.defineProperty ---------------
let user = {
   name: "Dav",
}

let result = Object.defineProperty(user, "lastName", {
   value: "Habetyan",
   writable:true,
})

console.log(result)


// ------- Object.create() ---

const human = {
   name: "John",

   sayName: function () {
      console.log(this.name);
   }
};

const developer = Object.create(human); /// Object.create!
developer.name = "Developer";

developer.writeCode = () => {
   console.log("writing code");
}

developer.writeCode();
developer.sayName();

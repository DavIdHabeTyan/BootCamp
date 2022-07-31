


// Object.assign()

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

const developer = Object.create(human);
developer.name = "Developer";

developer.writeCode = () => {
   console.log("writing code");
}

developer.writeCode();
developer.sayName();

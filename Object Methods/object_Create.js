const person = {
   name: "John",
   sayName: function () {
      console.log(this.name);
   }
};

const developer = Object.create(person); /// Object.create() կլոն է անում object.
developer.name = "Suren";
developer.writeCode = function(){
   console.log("Hello");
};

developer.sayName(); /// === => Suren;
developer.writeCode(); // === => Hello;


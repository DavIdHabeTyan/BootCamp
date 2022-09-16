var length = 10;
function fn() {
   console.log(this.length) /// undefined
}


var obj= {
   length: 5,
   method: function(fn) {
      fn();
      arguments[0]();
   }
};

obj.method(fn, 1); // 2

function Person(name) {
   const that = this;
   this._name = name;
   return {
      get name() {
         return that._name;
      },
      set name(name) {
         that._name = name;
      }

   };
}
const p1 = new Person('Nikol');
console.log(p1._name);
console.log(p1.name);

p1.name = 'Jack';
console.log(p1.name)
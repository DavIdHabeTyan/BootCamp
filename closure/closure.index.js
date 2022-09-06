
// function generator(){
//    let count = 0;
//    return function() {
//       return ++count
//    }
// }
//
// let gener = generator();
// console.log(gener())
// console.log(gener())
// console.log(gener())
// console.log(gener())

const counter = {
   count: 0,
   increment: function () {
      return (this.count += 1);
   },

   decrement: function () {
      return (this.count -= 1);
   },

   getCount: function () {
      return this.count;
   }
};

counter.increment();
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getCount()); // => 2


function f(number) {
   f.count = (f.count|| 0 ) + number;
   return f;
}

const {count} = f(1)(2)(3)(4)(5);


console.log(count) // => 15

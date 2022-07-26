
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

console.log(counter.getCount());




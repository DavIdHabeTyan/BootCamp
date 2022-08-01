// Function invocation;

//If no strict mode! this === window;


// const test = {
//    number: 5,
//    number2: 10,
//    sum () {
//       console.log(this === test);
//       const calculate = () => {
//          console.log(this === test)
//          return this.number + this.number2;
//
//       }
//       return calculate()
//    }
// }
//
// test.sum()


class Foo{
   bar = () => {
      console.log(this);
   };
}

const foo = new Foo();
console.log(foo)



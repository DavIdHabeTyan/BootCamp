// this - @ scope -a  bayc dinamik scope,
// inq@ paymanavorvaca vochte ira stexcman texov, ayl kanchi texov,


// function foo() {
//    console.log(this)
// }
//
// let that = {
//    name: "Dav", boo: foo, goo: function () {
//       foo();
//    }
// }

// console.log(that.boo());
// that.goo()


// const calc = {
//    num: 0,
//    increment() {
//       console.log(this === calc); // => true
//       this.num += 1;
//       return this.num;
//    }
// };
// // method invocation. this is calc
// calc.increment(); // => 1
// calc.increment();

/*
class Foo {
   bar = () => {
      console.log(this);
   };
}
const foo = new Foo()
console.log(foo)

const testArrow = () => {
   console.log(this);

};

console.log(testArrow)
*/


let text = "a good example"
function changeText(text){
   let lastText = text.split(' ').pop();
   let arrSTr = text.split(' ')
   arrSTr.splice(arrSTr.length-1, 1);
   arrSTr.unshift(lastText)
   return arrSTr.join(' ')
}
console.log(changeText(text));


let numb = 456;

while (numb > 0) {
   let lastNumb = numb % 10;

}



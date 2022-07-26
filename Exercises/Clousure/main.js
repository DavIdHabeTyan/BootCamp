// ԻՆՉ է closure -ը;
// JavaScript -ում բոլոր function-ները closure -են
// closure en ayn function-ner@ voronq hxum unen irenc cnox function-nerin

// JavaScript -ում բոլոր  function- ները closure  են․

// function counter(){
//    let count = 0;
//    return ++count
// }
//
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())


/// amen kancheluc count@ shatanuma
/*
function generator(){
   let count = 0;
   return () => ++count;
}
let counter1 = generator()
let counter2 = generator()

console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter2())



 */
/*

// sargum enq popoxakan mer functionin ev amen angam kancheluc avelacnuma nuyn counter@

function generator(){
   let count = 0;
   return () => ++count ;
}
const counter = generator();

const a = counter;
const b = counter;

console.log(counter())
console.log(a())
console.log(b())


 */


/////////--------------------

/*
function global(){
   let count = 0;
   return function generator() {
      return () => ++count;
   };
}
let counter1 = global();

let a = counter1()
let b = counter1()
console.log(a())
console.log(a())
console.log(b())

 */


function generator(){
   let count =0;
   return function(){
        return  ++count
   }

}

let counter = generator();
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
let a = counter;
console.log(a())






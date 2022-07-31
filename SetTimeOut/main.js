/*
const calc = (a, b) => {
   console.log(a+ b)
}
let id = setTimeout(() => calc(1,2), 2000);



/*

function foo() {
   console.log("Hi");

   setTimeout(() => {
      console.log("barev")
   }, 2000)
}
console.log(foo())

 */


/// setTimeout and clearTimeout
/*
function boo() {
   let a = 4;
   let timeId = setTimeout(() => {
      console.log(a)
      clearTimeout(timeId)
   }, 1000)

}

console.log(boo())
*/

// vorna aveli shut ashxatum
/*
function foo() {
   let a = 1;
   console.log(a++, " first");
   setTimeout(() => {
      console.log(a++, " second")
   }, 2000);
   console.log(a++, "third")
   setTimeout(() => console.log(a++, "end"), 1000);
}
console.log(foo())
 */


/// to work in Inspect //

// ashxatacnel inspectum;


/*
const calc = (a, b) =>{
   console.log(a + b);
};
let result =  setTimeout(() => calc(1,2), 2000);
console.log(setTimeout)

console.log(result)
let bb = clearTimeout(result)
console.log(bb)
 */


/// generate  Timer in setInterval;

/*

function general() {
   let timeId;
   function timer(time){
      return () => {
         if(time === 1) {
            clearInterval(timeId)
         }
         console.log(--time)
      }
   }
   timeId = setInterval(timer(10),900);
}

console.log(general())


 */



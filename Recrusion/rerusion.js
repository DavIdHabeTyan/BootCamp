// Closure and recrusion


function f(number) {
   f.count = (f.count || 0) + number;
   return f;
}
const { count } = f(1)(2)(3)(4)(5);


console.log(count);  // => 15



function factorial(numb) {
   if(numb < 1) {
      return 1
   }

   return numb * (factorial(numb - 1))
}

console.log(factorial(5)) // => 120
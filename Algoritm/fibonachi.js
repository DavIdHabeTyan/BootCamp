function fibonachi(numb) {
   let fib = [1, 1];
   while(fib.length < numb){
      let last = fib[fib.length - 1];
      let last2 = fib[fib.length - 2];
      fib.push(last + last2)
   }

   return fib;
}

console.log(fibonachi(4))
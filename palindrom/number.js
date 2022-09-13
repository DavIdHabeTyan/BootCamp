

function isplandrome(numb) {
   let number = numb;
   let palindrome = 0;

   while(number) {
      let temp = number % 10;
      palindrome = palindrome * 10 + temp;
      number = (number - temp) /10
   }
   return numb === palindrome
}

console.log(isplandrome(454))
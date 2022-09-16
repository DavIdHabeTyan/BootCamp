function isPalindromNumber(numb) {
   let palindrom = 0;
   let copyNumb = numb
   while (copyNumb) {
      let lastNumb = copyNumb % 10;
      palindrom = palindrom * 10 + lastNumb;
      copyNumb = (copyNumb - lastNumb) / 10;
   }
   return palindrom === numb
}

console.log(isPalindromNumber(454))


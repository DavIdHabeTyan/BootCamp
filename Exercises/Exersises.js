/*
function isEqual(number) {
   let isNumb = false;
   let count = 0;
   let str = number.toString()
   if(str.length % 2 !== 0) {
      return isNumb
   }
   for(let i = 0; i < str.length - 1; i++) {
      if(i <= (str.length - 1) / 2 ){
         count += Number(str[i]);
      }else{
         count -= Number(str[i]);
      }
   }
      return !count;
}
console.log(isEqual(1020))

 */

let arr = [1, 2, 3, 3, 4, 5, 5, 6, 76, 78];

let result = arr.reduce((acum, elem) => {
   if (acum[elem]) {
      acum[elem]++
   } else {
      acum[elem] = 1
   }
   return acum
},[]);


console.log(result)


/*
let max = 0;
let current;
for (let key in result) {
   let numb = Number(result[key])
   if (numb > max) {
      max = numb;
      current = Number(key);
   }
}
console.log(current)
 */


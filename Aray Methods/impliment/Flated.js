// let arr = [1, 2, 3, 4, 5, [1, 2, [3, 4]]];
//
// let result = [];
//
// function myFlated(arr) {
//    for(let i = 0; i < arr.length; i++){
//       if(Array.isArray(arr[i])){
//          myFlated(arr[i])
//       } else{
//          result.push(arr[i])
//       }
//    }
//    return result
// }
// console.log(myFlated(arr))
/*

// implement flatted
function myFlat(arr, curent = 1) {
   let newFlat = [];

   (function myFlatted(arrAy, cur) {
      arrAy.forEach(elem => {
         if (Array.isArray(elem) && cur > 0) {
            myFlatted(elem, cur - 1);
         } else {
            newFlat.push(elem)
         }
      })

   })(arr, curent)
   return newFlat;
}

console.log(myFlat([12, 3, 4, [3, 4, [56, 7, [4, 5, [76, [4]]]]]], 20));

*/

let arr = [12, 3, 4, [3, 4, [56, 7, [4, 5, [76, [4]]]]]]

console.log(arr.flat(Infinity))










































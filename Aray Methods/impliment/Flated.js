let arr = [1, 2, 3, 4, 5, [1, 2, [3, 4]]];

let result = [];

function myFlated(arr) {
   for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
         myFlated(arr[i])
      } else{
         result.push(arr[i])
      }
   }
   return result
}
console.log(myFlated(arr))

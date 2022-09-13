/*
function myReduce(arr, callback, acum) {
   for(let i = 0; i < arr.length; i++) {
      if(i ===0 && acum === undefined){
         acum = arr[i]
      } else{
         acum = callback(acum, arr[i])
      }
   }
   return acum
}

let result = (myReduce([4, 5, 6], function(acc, vall) {
  return acc + vall
},))

console.log(result)


 */


Array.prototype.myReduce = function (callback, acum) {
   for(let i = 0; i < this.length; i++) {
      if(i ===0 && acum === undefined){
         acum = arr[i]
      } else{
         acum = callback(acum, arr[i])
      }
   }
   return acum
}

let arr = [12, 3, 4];
let result = arr.myReduce(function (val, accum){
   return val + accum
}, 0)

console.log(result)
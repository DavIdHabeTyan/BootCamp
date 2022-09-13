/*
function myFilter(arr, callback) {
   let filtered = [];
   for(let i = 0; i < arr.length; i++) {
      if(callback(arr[i])){
         filtered.push(arr[i])
      }
   }
   return filtered
}
console.log(myFilter([12, 4, 5], function(elem) {
   return elem > 4
}))
 */


Array.prototype.myFilter = function(callback){
   let filter = [];
   this.forEach(elem => {
      if(callback(elem)) {
         filter.push(elem)
      }
   })
   return filter;
}
let arr = [5, 7, 3];
console.log(arr.myFilter(function (val) {
   return val > 6
}));




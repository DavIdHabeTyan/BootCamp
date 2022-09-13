/*
Array.prototype.myFind = function(callback) {
   for(let i = 0; i < this.length; i++) {
      if(callback(this[i])) {
         return this[i]
      }
   }
}
const inventory = [
   {name: 'apples', quantity: 2},
   {name: 'bananas', quantity: 0},
   {name: 'cherries', quantity: 5}
];

console.log(inventory.myFind(function(elem) {
   return elem.name === "apples";
}));



 */


function myFind(arr, callback) {
   for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
         return arr[i]
      }
   }
}
console.log(myFind([12, 3, 4], function (elem) {
   return elem === 3
}))
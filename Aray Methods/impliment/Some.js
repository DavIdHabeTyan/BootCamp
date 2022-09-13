Array.prototype.mysome = function(callback){
   let issome = false;
   for(let i = 0; i < this.length; i++) {
      if(callback(this[i])){
         issome = true
      }
   }
   return issome
}

let arr = [1, 2,3, 4, 5];

console.log(arr.mysome(function (elem, val) {
   return elem === 6
}))
function myFilter(arr, callback) {
   let filtered = [];
   for(let i = 0; i< arr.length;i++) {
      if(callback(arr[i])){
         filtered.push(arr[i]);
      }
   }
   return filtered
}

console.log(myFilter([1, 2, 3, 4], (elem) => {
   return elem > 2
}))
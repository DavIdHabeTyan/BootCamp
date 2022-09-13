function myForEach(arr, callback) {
   for(let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
   }
}
myForEach([1, 2, 3], (elem) =>  console.log(elem + 10))




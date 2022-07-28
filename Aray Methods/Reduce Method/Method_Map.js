let myMap = function(arr, func){
   return arr.reduce((accum, elem, i) => {
      accum[i] = func(elem);
      return accum;
   },[]);

}
let result = myMap([4, 5, 6, 2], function(val)  {
   return val + 10
})
console.log(result)
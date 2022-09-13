// function myMap(arr, callback) {
//    let newArr = []
//    arr.forEach((elem, i) => {
//       newArr.push(callback(elem, i));
//    })
//    return newArr
// }
// console.log(myMap([12, 3, 4], function (elem, ) {
//    return elem * 2;
// }))


Array.prototype.myMap = function(callback){

   let newArr = [];
   this.forEach(elem => newArr.push(callback(elem)))
   return newArr
}
let arr = [1, 3, 4];
console.log(arr.myMap(function (val) {
   return val + 3
}))


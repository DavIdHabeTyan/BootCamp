let array = [4, 3, [8, 2], [3, 6, [9, [10, [77, 88], 35], 12, 33], 6], 7, 8, 9]

function creatSingleArr(arr) {
   return arr.reduce((curr, item) => {
      if (Array.isArray(item)) {
         return curr.concat(creatSingleArr(item))
      }
      return curr.concat(item)
   }, [])
}

console.log(creatSingleArr(array))

//    output  [4, 3, 8, 2, 3, 6,9, 12, 33, 6, 7, 8, 9]


function counter(n){

   if(n === 1){
      return 1
   }
   return n * counter(n - 1)
}

console.log(counter(5))


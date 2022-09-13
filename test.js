// let player1 = Promise.resolve("1");
// let player2 = Promise.resolve("2");
// let player3 = new Promise((res) => {
//    setTimeout(() => res("hi"), 8000);
// })
//
// console.log(1);
//
// player1.then(res => console.log("p1 first then"))
//    .then(es => console.log("p1 second then"));
// console.log(2);
// setTimeout(() => console.log("3000"), 3000);
// player2.then(res => console.log("p2 first then"))
//    .then(es => console.log("p2 second then"));
//
// setTimeout(() => console.log("2000"), 12000);
//
// player3.then(res => console.log("p3"))
//
//


// let arr = [12, 4, 8, 1, 5, 0, 1, 3 , 12, 3, 1, 2, 3, 4, 5]
//
// let result =[];
// for(let i = 0, c = arr.length; i < arr.length; i++, c--) {
//
//
//        result.push(arr[c])
//
//
// }
// console.log(result)

const obj1 = {
   result: 0
}

const obj2 = {
   result: 0
}

function reduceAdd(){
   let result = 0
   for(let i = 0, len = arguments.length; i < len; i++){
      result += arguments[i]
   }
   this.result = result
}

reduceAdd.apply(obj1, [1,2,3,4,5])




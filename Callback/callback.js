/*

function getUserName(callback){
   console.log("requesting to the server");

   setTimeout(function() {
      let userName = "David";
      callback(userName)
   }, 2500)
}

getUserName(function(username) {
   console.log(username);
})

console.log("Code during timeout")

 */

function A(collBackA) {
   setTimeout( ()=> {
      collBackA();
   }, 1500);
   return "A Completed";
}

function B(collBackB) {
   setTimeout(() => {
      collBackB();

   }, 1500);
   return "B Completed";
}

function C(){
   return "C Completed";
}

const aRes = A(function () {
   const bres = B(function () {
      const res = C();
      console.log(res)
   })
   console.log(bres)
})
console.log(aRes)

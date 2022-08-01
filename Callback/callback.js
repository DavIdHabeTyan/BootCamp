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
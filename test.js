function main() {
   console.log("1")
   function callback(result) {
      console.log(result);
   }

   setTimeout((callback) => {
      let result = 2;
      callback(result);
   }, 3000)
   console.log(3)
}

console.log(main())


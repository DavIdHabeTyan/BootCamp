function foo() {
   return new Promise((res, rej) => {
      setTimeout(() => {
         res(3)
      },3000)
   })
}

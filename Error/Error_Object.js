
// throw Error("something went wrong");

function foo() {
   return new Promise((res, rej) => {
      rej(new Error({status: "bad request"}))
   })
}

foo().catch(err => console.log(err) )





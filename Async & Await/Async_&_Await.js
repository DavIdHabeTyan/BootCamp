// ինչպես անել որ տպի հերթականությամբ և ինտերվալով;
/*
function a() {
   return new Promise((res) => {
      setTimeout(() => {
         res("a");
      }, 500);
   });
}

function b() {
   return new Promise((res) => {
      setTimeout(() => {
         res("b");
      },500 );
   });
}

function c() {
   return new Promise((res) => {
      setTimeout(() => {
         res("c")
      },500);
   });
}

async function result() {
   const res1 = await a();
   console.log(res1);
   const res2 = await b();
   console.log(res2);
   const res3 = await c();
   console.log(res3);
}
result()

 */

// ------------ sleep
/*
function sleep(ms = 100) {
   return new Promise((resolve) => {
      setTimeout(resolve, ms);
   });
}

async function A() {
   await sleep(2000);
   return 15;
}

async function wait() {
   const a = await A() ;
   console.log(a);
}

wait()
*/
/*
function sleep(ms) {
   return new Promise((resolve) => {
      setTimeout(resolve, ms);
   })
}

async function authenticate(username, password) {
   await sleep(2000);

   if(username === "admin" && password === 1234) {
      return {success: true};
   } else{
      return new Error();
   }
}

authenticate("admin", 1234)
   .then(function(res) {
      console.log(res);
   })
   .catch(function(error) {
      console.log(error)
   });



 */




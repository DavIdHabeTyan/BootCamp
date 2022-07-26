/*
let promise = new Promise((resolve, reject) => {
   console.log("1");
   let status = 205;
   if (status >= 200 && status <= 300) {
      setTimeout(() => {
         resolve("Image Uploaded");
      },4000)
   } else{
      reject("Something went wrong!")
   }
})

console.log(promise)

 */


/*
// ---------- inch ktpi
let prom = new Promise((res) => {
   setTimeout(res(),2000);
}).then(res => console.log(1)).then(res => console.log(2)); ansinxron koda
console.log(3)
////////// promisner@ katarvum en sixron bayc iranc metodner@ asinxron;

//  -----------   3  ---- 1 ---- 2
 */


///// Meschyan
/*
function server() {
   let status = 20
   return new Promise((res, rej) => {
      if (status >= 8 && status < 15) {
         res("Hello Window")
      }else{
         rej("write correct number");
      }
   })
}

const port = server();
port.then((result) => {
   console.log(result)
}).catch((err) => {
   console.log("Error")
})

 */
/*
let a = setTimeout(() => {
   console.log(1);
}, 2000)

let b = console.log(2);

let c = setTimeout(() => {
   console.log(3)
},1000)


 */

function prom() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(1)
      }, 2000)
   })
}

let result = prom();
result.then(resolve => console.log(resolve)).then(() => console.log(2)).then(() => setTimeout(() => {
   console.log(3)
},1000))
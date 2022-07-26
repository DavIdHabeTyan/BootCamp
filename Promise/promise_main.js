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

/*
// ---------- inch ktpi
let prom = new Promise((res) => {
   setTimeout(res(),2000);
}).then(res => console.log(1)).then(res => console.log(2)); ansinxron koda
console.log(3)
////////// promisner@ katarvum en sixron bayc iranc metodner@ asinxron;

//  -----------   3  ---- 1 ---- 2
 */
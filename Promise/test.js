
/*
function func () {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve("1");
  },500)
 });
}

function func2() {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve("2")
  },500)
 });
}

function func3(){
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve("3")
  },500)
 });
}

const p = func();

p.then(res => {
 console.log(res);
})
.then(res => {
 return func2();
})
.then(res => {
 console.log(res)
})
.then(res => {
 return func3();
})
.then(res => {
 console.log(res)
})


 */

function func() {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   reject(new Error("Vay Vay"));
  },1000);
 });
}

const p = func();

p.then(res => {
 console.log(res);
})
.catch(err => {
 console.log(err)
 })
   .then(res => {
    return "inch lav e";
   }).then(res => {
 console.log(res)
})



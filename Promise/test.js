let prom = new Promise((resolve,reject) => {

 setTimeout(resolve(1),1000);

}).then((resolve) => console.log(resolve)).then((resolve) => console.log(2)).then((resolve) => setTimeout(() => console.log(3), 2000))






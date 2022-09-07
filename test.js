// let player1 = Promise.resolve("1");
// let player2 = Promise.resolve("2");
// let player3 = new Promise((res) => {
//    setTimeout(() => res("hi"), 8000);
// })
//
// console.log(1);
//
// player1.then(res => console.log("p1 first then"))
//    .then(es => console.log("p1 second then"));
// console.log(2);
// setTimeout(() => console.log("3000"), 3000);
// player2.then(res => console.log("p2 first then"))
//    .then(es => console.log("p2 second then"));
//
// setTimeout(() => console.log("2000"), 12000);
//
// player3.then(res => console.log("p3"))
//
//




let list = [
   { name: "Alice", job: "Data Analyst", country: "AU" },
   { name: "Bob", job: "Pilot", country: "US" },
   { name: "Lewis", job: "Pilot", country: "US" },
   { name: "Karen", job: "Software Eng", country: "CA" },
   { name: "Jona", job: "Painter", country: "CA" },
   { name: "Jeremy", job: "Artist", country: "SP" }
];



function group(arr, prop) {
   return arr.reduce((acum, elem) => {
      let item = elem[prop];
      (acum[item] = acum[item] || []).push(elem)
      return acum
   },{})

}

console.log(group(list, 'country'))
/// Group Array in obj
/*
let list = [
   { name: "Alice", job: "Data Analyst", country: "AU" },
   { name: "Bob", job: "Pilot", country: "US" },
   { name: "Lewis", job: "Pilot", country: "US" },
   { name: "Karen", job: "Software Eng", country: "CA" },
   { name: "Jona", job: "Painter", country: "CA" },
   { name: "Jeremy", job: "Artist", country: "SP" }
];

function group(arr, prop) {
   return arr.reduce((accum, elem) => {
      (accum[elem[prop]] = accum[elem[prop]] || []).push(elem);
      return accum
   },{})
}
console.log(group(list, "country"))

 */

//AVELACNEL KEY COLOR : GUYN

const obj = {
   red: [
      {name: 'Alice', job: 'Data Analyst', country: 'AU'},
      {name: 'Bob', job: 'Pilot', country: 'US'},
      {name: 'Lewis', job: 'Pilot', country: 'US'},
      {name: 'Karen', job: 'Software Eng', country: 'CA'},
      {name: 'Jona', job: 'Painter', country: 'CA'},
      {name: 'Jeremy', job: 'Artist', country: 'SP'},
   ],
   grrin:[
      {name: 'Alice', job: 'Data Analyst', country: 'AU'},
      {name: 'Bob', job: 'Pilot', country: 'US'},
      {name: 'Lewis', job: 'Pilot', country: 'US'},
      {name: 'Karen', job: 'Software Eng', country: 'CA'},
      {name: 'Jona', job: 'Painter', country: 'CA'},
      {name: 'Jeremy', job: 'Artist', country: 'SP'},
   ],
   blue:[
      {name: 'Alice', job: 'Data Analyst', country: 'AU'},
      {name: 'Bob', job: 'Pilot', country: 'US'},
      {name: 'Lewis', job: 'Pilot', country: 'US'},
      {name: 'Karen', job: 'Software Eng', country: 'CA'},
      {name: 'Jona', job: 'Painter', country: 'CA'},
      {name: 'Jeremy', job: 'Artist', country: 'SP'},
   ],
};



for(key in obj) {
   obj[key].forEach(elem => elem['color'] = key)
}
console.log(obj)                                                                 
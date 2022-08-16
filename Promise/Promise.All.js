// Promise.all([
//    fetch("https://corona-api.com/countries/am"),
//    fetch("https://corona-api.com/countries/us"),
//    fetch("https://corona-api.com/countries/ru"),
// ]).then((streams) => {
//   return new Promise.all(streams.map(elem => elem.json()))
// }).then(result => {
//    console.log(result)
// }).catch(err => {
//    console.log(err)
// })

let URL = "https://corona-api.com/countries/am"

fetch(URL).then((response) => {
   return response.json()
})
//object group sargel Array
//object group to Array


let obj = {
   green: [{name: "Sargis"}, {name: "Ani"}, {name: "Zaven"}],
   red: [{name: "Hayk"}, {name: "Anna"}, {name: "Suren"}],
   yellow: [{name: "vahe"}, {name: "Arman"}, {name: "Narek"}],
}

let result = Object.keys(obj).reduce((acum, item) => {
   let row = obj[item].map(element => {
      element.team = item
      return element
   })
   return [...acum, ...row]
}, [])

console.log(result)

/*

/// find id and marge
let user = [{name: "David", id: 2345678}];
let statuses = [{id: 2345678, status: "married"}];

function findIdAndMarge(person, status){
    if(status.id === person.id ) {
       return Object.assign(...person, ...status)
    }

}

console.log(findIdAndMarge(user, statuses))

 */
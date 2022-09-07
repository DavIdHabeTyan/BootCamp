// link for exercises https://coursework.vschool.io/array-reduce-exercises/

//exercise 3     Turn an array of voter objects into a count of how many people voted

/*
let voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];

function findVoted(arr) {
  return  arr.reduce((acc, item) => acc + item.voted, 0);
}

console.log(findVoted(voters))

 */

//exercise 5  ---  Given an array of arrays, flatten them into a single array
/*
let  arrays = [
   ["1", "2", "3"],
   [true],
   [4, 5, 6]
];

function flatten(arr) {
   return arr.reduce((curr, item) =>  curr.concat(item),[])
}

console.log(flatten(arrays))



 */

function FindIdPerson(user){
   this.user = user;
   this.margePerson = function(peopleList){
      return this.user.filter(elem => {
         if( elem.id === peopleList.id)
            return [...this.user, peopleList.status]

      });
   };
}
const people = new FindIdPerson([{name: "Ani"}, {id: 2345789}]);
const peoplesMarge = people.margePerson([{id:2345789}, {status: "married"}]);
console.log(peoplesMarge)


//gtnel krknvox tver@

let arr = [1, 2, 3, 4, 5,0, 1,2, 3, 4, 5];

let unrepatable = arr.reduce((acum, elem, ) => {
   if(!acum.includes(elem)){
      acum.push(elem)
   }
   return acum
},[])

console.log(unrepatable)


/// group reduce
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
   return arr.reduce((acum, elem) => {
      let item = elem[prop];
      (acum[item] = acum[item] || []).push(elem)
      return acum
   },{})
}
console.log(group(list, 'country'))

 */
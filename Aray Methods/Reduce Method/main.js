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

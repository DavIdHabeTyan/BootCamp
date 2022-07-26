//Marge Array in id

let user = [{name: "Ani"}, {id: 2345789}];
let status = [{id:2345789}, {status: "married"}]

function margeArray(user, status){
   let filterId =  status.filter(id => {
      return id.id === user.id
   })
   return [...user, ...filterId]
}
console.log(margeArray(user, status))
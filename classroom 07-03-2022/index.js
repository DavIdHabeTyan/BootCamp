// marge objects


function marge(obj, obj2) {
   const mergedObject = {}
   for (let arrName in obj) {
      mergedObject[arrName] = obj[arrName]
   }
   for (let arrName in obj2) {
      mergedObject[arrName] = obj2[arrName]
   }
   return mergedObject
}

console.log(marge({
      name: 'John',
      age: 23,
   },

   {
      name: 'Jane',
      salary: '$ 250 000',
      position: 'Director',
   }))


/// marge infinite Object

function merge1(...obj) {
   return obj.reduce((acm, elem) => {
      return {...acm, ...elem}
   }, {})

}

console.log(merge1({
      name: 'John',
      age: 23,
   },
   {
      name: 'Jane',
      salary: '$ 250 000',
      position: 'Director',
   }))
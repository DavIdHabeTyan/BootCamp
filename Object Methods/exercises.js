//sort prices in Object;

/*
const drink = [
   {name: 'lemonade', price: 50},
   {name: 'lime', price: 10},
]

const result = drink.sort((a, b) => a.price - b.price);

 */

//calculete value in object

function calculateDifference(obj, numb) {
   let result = Object.values(obj).reduce((acum, elem) => {
      return acum + elem
   },0)
return result - numb
}

console.log(calculateDifference({'baseball bat': 20}, 5))


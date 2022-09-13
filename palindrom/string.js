let str = 'aabbaa';
let newStr = ''

console.time("for")
let result  = str.split('').reverse('').join('')

console.timeEnd("for")
// for(let i = str.length - 1; i >= 0; i--){
//    newStr += str[i]
// }



console.log( str === newStr)
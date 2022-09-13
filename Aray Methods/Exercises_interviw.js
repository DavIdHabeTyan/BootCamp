
//hashvel qani angam en krknvum teqster@ ev sortavorel nvazman kargov.
/*
let arr = [ 'mail', 'mail', 'gmail','link',  'skype', 'link','link',];
let currentObj = {};

for(let i = 0; i < arr.length; i++ ) {
   let cur = arr[i];
   if(currentObj[cur]) {
      currentObj[cur] += 1;
   } else {
      currentObj[cur] = 1;
   }
}
let result = Object.keys(currentObj).sort((a, b) => currentObj[b] - currentObj[a]);
console.log(result)
//{ mail: 2, gmail: 1, link: 3, skype: 1 }

 */

//gtnel krknvox tver@ zangaci mej

function getDublicate(arr) {
   let result = [];
   let dublicate = false;
   let toBechecked = arr[0];
   toBechecked.forEach(elem => {
      arr.forEach(elem2 => {
         if(elem2.includes(elem)) {
            dublicate  = true;
         }else {
            dublicate = false;
         }
      })
      if(dublicate) {
         result.push(elem)
      }
   })
   return result;
}
let arr = [[1, 2, 3], [2, 3, 5], [4, 3, 2], [7,  2]];
console.log(getDublicate(arr));


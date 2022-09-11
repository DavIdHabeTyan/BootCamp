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

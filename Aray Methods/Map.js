//reverse number

let arr = [1, 2, 3, 4, 5, 6, 7];
let reverse = arr.map((elem, index, arr) => arr[arr.length - index - 1]);

console.log(reverse);
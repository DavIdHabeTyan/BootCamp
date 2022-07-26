
let x = {
   numb: 1,
   toString(){
      return x.numb++
   }
}

if(x == 1 && x == 2 && x == 3){
   console.log("good code")
}

/// implimed BInd

function f () {
   console.log(this)
}

f.__proto__.cBind = function customBind(obj) {
   return () => this.call(obj);
}

let bind = f.cBind({name: "David"});
console.log(bind());


// constructot function -ner@ unen .prototipe properti
// etet uzum enq avelacnel constructor function -ic avelacnum enq .prototipe
// bayc ete uzum enq avelacnel instenci vrayic,  kam function -i prototipi vra  grum enq __proto__
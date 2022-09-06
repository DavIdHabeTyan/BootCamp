//gaxapar@ constructor function -i ayn e stexcel nor referance (Objectativ tvyalner)
//constructor  function -i npatakn e nor tip sahmanel@
// vorpes kanon nor tip@ chi karox primitive linel;


function User(name, surName){
   this.name = name;
   this.surName = surName;
   return 1;
}


function User1(name, surName){
   this.name = name;
   this.surName = surName;
   return new Array("444");

}

function User2(name, surName) {
   this.name = name;
   this.surName = surName;
   return {aa: 55};
}

user = new User("David", "Habetyan");

console.log(user)


user2 = new User2("David", "Habetyan");
console.log(user2);

// ete constructor functionic veradarcvum e primitv valyue  ev Object apa pritiv tip@ ignor e arvum;

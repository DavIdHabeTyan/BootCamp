function User(name, surname) {
   console.log('it is with new', new.target);
   if(new.target){
      this.name = name;
      this.surname = surname;
   } else{
      console.log("Else");
      return new User(name, surname);
   }
}

const people = new User("David", "Habetyan");

console.log(people)



/// check ardyoq kanchvela new - ov function@;


/// aystex grel en if u ete inch vor mek@ moracela new grin menq arden stugum enq new.target ev mer kod@
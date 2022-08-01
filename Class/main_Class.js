/// --- classic Class -------
class User {
   constructor(name, lastName) {
      this.name = name;
      this.lastName = lastName;
   };

   fulName() {
      console.log(`${this.name} ${this.lastName}`);
   }
}


//// ---- ---- class + Static

class Arm {
   static a = 7; ///  === static property

   static b() {  ///  === static method
      console.log("Static")
   }
}

const a1 = new Arm();
a1.a // ==== error
a1.b // === error;

Arm.a  /// === 7


/////  --------------   class inheritance  + super  ------ class ժառանգություն


class Machine {
   constructor(props) {
      this.motor = props.motor;
      this.color = props.color;
      this.speed = props.speed;
   };

   about() {
      let pros = {
         moro: this.motor,
         color: this.color,
         speed: this.speed,
      }
      return pros;
   }
}

const machine = new Machine({speed: "100", color: "Grey", motor: 302});

class Car extends Machine {
   constructor(props) {
      super(props);
      this.model = props.model;
   }

   drive() {
      console.log(this.speed);
   }
   #private = 10;
   changeProtected(arg){ /// ------   ստեխծել եմ private method
      this.#private = arg
   }

   about() {
      console.log(`model: ${this.model}, color: ${this.color}`);
      console.log(super.about()) /// -------- կանչում ենք parent-ի about method-ը
   }
}

const car = new Car({
   speed: 200,
   color: "Black",
   motor: 3.5,
   model: "Mercedes",
});
car.about()



class Mercedes extends Car{
   constructor(props){
      super(props)
      this.year = props.year;
      this.price = props.price
   }

}

const mercedes = new Mercedes({
   speed: 350,
   color: "Black",
   motor: 3.5,
   model: "Mercedes",
   year: 2021,
   price: "255000$"
});

console.log(mercedes)

console.log(mercedes instanceof Machine);



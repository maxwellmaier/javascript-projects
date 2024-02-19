// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

// class Astronaut {
//    constructor(name, age, mass = 54){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//    }
// }

// let tortoise = new Astronaut('Speedy', 120, 50, "boogers");

// console.log(tortoise.name, tortoise.age, tortoise.mass);
// console.log(tortoise)
// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!
// class Car {
//   constructor(make, model, year, color, mpg){
//      this.make = make;
//      this.model = model;
//      this.year = year;
//      this.color = color;
//      this.mpg = mpg;
//   }
// }
// let myCar = new Car('Tesla', 'Model S', 2019);
// console.log(myCar);
// Here we assign the method inside the constructor
// class AstronautI {
//   constructor(name, age, mass){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//      this.reportStats = function() {
//         let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
//         return stats;
//      }
//   }
// }

// Here we assign the method outside of the constructor
// class AstronautO {
//   constructor(name, age, mass){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//   }

//   reportStats() {
//      let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
//      return stats;
//   }
// }

// let fox = new AstronautI('Fox', 7, 12);
// let hippo = new AstronautO('Hippo', 25, 1000);

// console.log(fox);
// console.log(hippo);

// class Plant {
//   constructor(type, height) {
//      this.type = type;
//      this.height = height;
//   }

//   grow  {
//      this.height = this.height + 1;
//   }
// }
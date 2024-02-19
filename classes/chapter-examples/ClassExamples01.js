//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

fox.type = 'fire';
fox.mass = 1200;
fox.analysis = "Giant fire warning.";
fox.age = 900;

console.log(fox);
console.log(fox.analysis);

//Try modifying or adding properties below.
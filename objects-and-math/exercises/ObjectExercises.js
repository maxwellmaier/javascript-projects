let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   // "Astronaut ID": 1,
   move: function() {
       return Math.floor(Math.random() * 11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   // "Astronaut ID": 3,
   move: function() {
       return Math.floor(Math.random() * 11);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   // "Astronaut ID": 2,
   move: function() {
       return Math.floor(Math.random() * 11);
   }
};

let dogOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   // "Astronaut ID": 4,
   move: function() {
       return Math.floor(Math.random() * 11);
   }
};

let tardiOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   // "Astronaut ID": 5,
   move: function() {
       return Math.floor(Math.random() * 11);
   }
};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["Astronaut ID"] = 1;
superChimpTwo["Astronaut ID"] = 2;
salamander["Astronaut ID"] = 3;
dogOne["Astronaut ID"] = 4;
tardiOne["Astronaut ID"] = 5;
// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, dogOne, tardiOne];
// Print out the relevant information about each animal.
// for (let i = 0; i <crew.length; i++) {
//    console.log(`${crew[i].name} is a ${crew.species[i]}. They are ${crew.age[i]} years old and ${crew.weight[i]} kilograms. Their ID is ${crew["AstronautID"][i]}`);
//    console.log(`Species: ${crew[i].species}`);
//    console.log(`Mass: ${crew[i].mass} kg`);
//    console.log(`Age: ${crew[i].age} years`);
//    console.log(`Astronaut ID: ${crew[i]["Astronaut ID"]}`);
//    console.log(`Move: ${crew[i].move()}`);
//    console.log("-----------");
// }
// 
// for (let i = 0; i < crew.length; i++) {
//    const { name, species, age, mass, "Astronaut ID": astronautID, move } = crew[i];
   
//    console.log(`${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`);
   
//    if (move) {
//        console.log(`Move: ${move()}`);
//    }
   
//    console.log("-----------");
// }

// superChimpOne["move"] = function () {return Math.floor(Math.random()*11)};
// superChimpTwo["move"] = function () {return Math.floor(Math.random()*11)};
// salamander["move"] = function () {return Math.floor(Math.random()*11)};
// dogOne["move"] = function () {return Math.floor(Math.random()*11)};
// tardiOne["move"] = function () {return Math.floor(Math.random()*11)};

// '____ is a ____. They are ____ years old and ____ kilograms. Their ID is ____.'
// Start an animal race!

function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  console.log(fitnessTest(crew))
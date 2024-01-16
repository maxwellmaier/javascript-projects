myStr = 'Index'

console.log(myStr[2] === 'n');
console.log(myStr[4] === 'x');
console.log(myStr[6] === ' ');
console.log(myStr[0] === 'I');

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

let firstName = "Max";
let lastName = "Maier";

console.log(firstName, "has", firstName.length, "characters");
console.log(lastName, "has", lastName.length, "characters");

console.log(firstName.toLowerCase());

cityName = "Kansas City";
stateName = "Missouri";
location = cityName + ", " +  stateName;

console.log(location.length);

let word = 'Javascript'
console.log(word.toUpperCase())
console.log(word.slice(4).toUpperCase())

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);
console.log(language.slice(1,6))

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

let name = "Jack";
let currentAge = 9;

console.log("Next year, " + name + " will be " + (currentAge + 1) + ".");
console.log(`Next year, ${name} will be ${currentAge + 1}`);

let poem = `Roses are red,
Violets are blue,
Something, something, something,
in a smelly shoe!`;
console.log(poem)
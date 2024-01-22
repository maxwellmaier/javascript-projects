let i = 0;

while (i < 51) {
  console.log(i);
  i++;
}

const input = require('readline-sync');

let num = input.question('Please enter a positive number:');
num = Number(num);

while (num <= 0) {
   num = input.question('Invalid input. Please enter a positive number:');
   num = Number(num);
}

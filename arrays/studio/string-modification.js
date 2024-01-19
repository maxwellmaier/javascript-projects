const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let firstStr = str.substring(3,10) 
console.log(firstStr)
let secondStr = str.substring(0,3)
console.log(secondStr)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} in pig latin would be ${firstStr + secondStr}.`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let newStr = input.question("What is your name? ")
let numToMove = input.question("How many letters would you like to move? ") || 3

let newFirstStr = newStr.substring(numToMove, newStr.length)
let newSecondStr = newStr.substring(0, numToMove)

console.log(newFirstStr)
console.log(newSecondStr)
if (numToMove > newStr.length) {
    console.log("Error")}
else {
    console.log(`${newStr} with ${numToMove} moved to the back is ${newFirstStr+newSecondStr}.`)}
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

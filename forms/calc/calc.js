
//creates a function that adds two numbers together 

function Calculate (numOne,numTwo){
  let sum = numOne + numTwo
  return sum
  }

//asks user for two numbers
let numOne = parseInt(prompt("Enter one number to add"))
let numTwo = parseInt(prompt("Enter another number to add"))

//Main program that gives the sum of the two numbers the user entered
let summedNumbers = Calculate(numOne,numTwo)
console.log(`The sum of ${numOne} and ${numTwo} is ${summedNumbers}.` )

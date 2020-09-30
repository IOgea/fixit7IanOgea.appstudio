//Creates a variable with the string saved inside it 
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

//Saves uppercase string to a new variable
let  upperCaseString = quoteString.toUpperCase()
console.log(`Upper case string is: ${upperCaseString}`)

//Creates a new author string variable 
let authorString =  "- Henry Ford"

//Creates a variable that puts the two strings together
let completeString = upperCaseString.concat(authorString)
console.log(`The string in quoteString is:  ${completeString}`)

//Creates a found variable that checks if the string "Henry" is in the string 
//Uses an if else statement to output a message to the console
let found = completeString.includes("Henry")
if( found == True){
console.log("Henry was in the quote string")
} else {
  console.log("Henry was NOT in the quote string")
  }
  
//Creates a second quote variable that has a new string
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"

//Changes second quote to lower case and logs it to the console
let lowerCaseString = secondQuote.toLowerCase()
console.log(`Lower case string is: ${lowerCaseString}`)

//gets a number from the user, adds 10 and then logs the new number to the console
let num = parseInt(prompt("Enter a number"))
numPlusTen = num +10
alert(`The number ${num} + 10 is ${numPlusTen}`)


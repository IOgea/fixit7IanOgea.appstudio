
//gets the number of times the user wants to run the loop
let times = prompt("Enter the number of times the loop should run")

//A while loop that prints the iteration it is on until it reaches the number that the user input
i = 1
while(i<=times){
  console.log(`This is loop iteration ${i}`)
  i++
}
console.log("The loop is now done.")

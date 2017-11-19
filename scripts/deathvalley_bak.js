//******** first challenges

//
// var numSheep = 4;
// var monthsToPrint = 12;
//
// for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
//
// //  <insert your code here>
// if(numSheep>10000){
//
//   console.log("Removing "  + numSheep/2 + " from the population")
//   numSheep=numSheep/2;
// }
//   console.log("numSheep: " + numSheep);
//
//   //numSheep *= 4;
//   console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
// }



// If the month is a multiple of 4, then find 75% of the sheep population. Log that value to the console in the format below.
// Then, remove that value from the total number of sheep.
// Otherwise, if the population is above 10000, find half of the sheep population.
//Log that value to the console in the format below. Then, remove that value from the total number of sheep.
// Use this format for logging sheep reduction:
//
// Removing <number> sheep from the population.

var numSheep = 4;
var monthsToPrint = 12;
var numSheeptoRemove;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber%4==0){
    numSheeptoRemove=numSheep*.75;
    console.log("Removing "+ numSheeptoRemove + " from the population.")
    numSheep=numSheep-numSheeptoRemove;
  }else if (numSheep>10000){
    numSheeptoRemove=numSheep*.50;
    console.log("Removing "+ numSheeptoRemove + " from the population.")
    numSheep=numSheep-numSheeptoRemove;
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

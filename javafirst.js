
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  //console.log("Month: " + monthNumber);

  if(monthNumber % 4 ==0){
    var sheepToRemove=numSheep *.75;
    console.log("Removing " + sheepToRemove + " sheep from population.");
    numSheep=numSheep - sheepToRemove;
   } else if (numSheep>10000){
     var sheepToRemove=numSheep *.5;
      console.log("Removing " + ( sheepToRemove) + " sheep from population.");
      numSheep=numSheep -sheepToRemove;
  }
 //console.log("numSheep after condition: " + numSheep);

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

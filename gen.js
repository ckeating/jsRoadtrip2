var totalGen = 19;
var totalMW = 0;
var genPower=0;

// Generators 1 through 4 produce 62 MW.
// Generators 5 through 19 produce 124 MW.

for(var Generator=1;Generator<=totalGen;Generator++){
  if(Generator>=1 && Generator<=4){
    genPower=62;
  } else if (Generator>=5 && Generator<=19) {
    genPower=124;
  }
  if (Generator % 2==0){
    totalMW=totalMW+genPower;
    console.log("Generator #"+ Generator + " is on,"+
            " adding "+ genPower + " MW, for a total of "+ totalMW + " MW!");
  } else {
    console.log("Generator #" + Generator + " is off.");
  }

}

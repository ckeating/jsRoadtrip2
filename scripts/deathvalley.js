

/*
The Park Rangers in Death Valley National Park divide up the feed responsibilities daily for the Bighorn Sheep population. Each sheep needs 2 lbs of ranger-provided food per day.

Build a function called feedPerRanger that takes in:

The current population of sheep.
The number of Park Rangers available during the day.
The function should alert the amount of feed that each Park Ranger should be responsible for on that day. The output should match the following format:

Each Park Ranger should load <number> lbs of feed today.

*/
/*
document.getElementById("btnSubmit").addEventListener("click", function(){alert("Hello world")}));


console.log("Hello world!!");

document.getElementById("btnSubmit").addEventListener("click", function(){alert("Hello world")});
*/


  /*
      document.getElementById("btnSubmit").addEventListener("click", function(){alert("Hello world")});
      
    document.getElementById("btnSubmit").addEventListener("click",     
      */



function feedPerRanger(numSheep,numRangers    ) {
        var foodNeeded=numSheep*2;
        var foodPerRanger=foodNeeded/numRangers;
        alert(numSheep + " sheep \n"+ numRangers + " rangers\n"
              +"Total food needed: \n"+ foodNeeded
              +" Each park ranger should load "+foodPerRanger+ "lbs of feed today");

}


//invoke:
//feedPerRanger(100,5);

/*
Back at the Hoover Dam, the technicians have decided they want more control of which generators are on and off. So, they’ve asked you to develop a way to adjust the total megawatts generated upon the switch-on or switch-off of a single, chosen generator.

Build a function named changePowerTotal that takes in four parameters:

The total power generated (a number)
The generator ID for the current generator (a number)
The generator status (a string that says "on" or "off")
The amount of power produced by the current generator (a number)
Your function should:

If the current generator is set to "on", then add to the total power generated.
Or if the current generator is set to "off", then remove from the total power generated.
return the total power generated.
alert the technician in the following formats:
For switching on:

Generator #2 is now on, adding 62 MW, for a total of 62 MW!
For switching off:

Generator #2 is now off, removing 62 MW, for a total of 0 MW!
Note: You do not need to call the function. Build the function declaration without invoking it.

*/

function changePowerTotal(totalPower,generatorID,
                          generatorStatus,amountPower)
{
   if (generatorStatus=="on")
   {
     totalPower+=amountPower;
     alert("Generator #" + generatorID + "is now on, adding " +
           amountPower + " MW, for a total of " + totalPower +
           " MW!");

     return totalPower;
   } else if (generatorStatus=="off"){
     totalPower=totalPower-amountPower;
     alert("Generator #" + generatorID + "is now off, removing " +
           amountPower + " MW, for a total of " + totalPower +
           " MW!");
     return totalPower;
   }
}
 
changePowerTotal(65,2,"off",43);





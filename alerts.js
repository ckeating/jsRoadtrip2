// var parkIsOpen = false;
//
// if (parkIsOpen) {
//   alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
// } else {
//   alert("Sorry, the Badlands are particularly bad today. We're closed!");
// }


var ageIsCorrect=false;
while (ageIsCorrect!=true){
  var userAge=prompt("What's your age, user?");
  ageIsCorrect=confirm("You entered "+ userAge + ". Is this correct?");
  if (ageIsCorrect==true){
        alert("Great! Your age is logged as "+userAge + ".");
        }
    }

/*
Check out the following setup. Enter a line of code that declares a variable called infant and accesses the word "Baby" from eightiesMovies without making any changes to either element inside the array.
*/

var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];

var infant=eightiesMovies[1]

var comboArray1 = ["One", "fish", 2, "fish"];

var poisson ="Fish";
var comboArray2=["Red", poisson, "Blue", poisson];

var arrayOfArrays=[comboArray1,comboArray2];

console.log(arrayOfArrays);

console.log("index[0] of array of arrays: \n"+arrayOfArrays[0]);
console.log("index[1] of array of arrays: \n"+arrayOfArrays[1]);
console.log(" third element of first array: \n"+arrayOfArrays[0][2]);



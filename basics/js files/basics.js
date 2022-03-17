// find the number of characters in a string
var string = "this is a string"
console.log(string.length);


// Change the casing of a string
var string = "otis"
var firsChar = string.slice(0,1);
var upperCaseFirstChar = firsChar.toUpperCase();
var restOfString = string.slice(1, string.length);
restOfString = restOfString.toLowerCase();
var fullString = upperCaseFirstChar + restOfString;
console.log(fullString);



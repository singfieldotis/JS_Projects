// Simple BMI Calculator to demonstrate Math
// takes weight in kg and height in meters
// squares height in meters and divides the weight by that. Then returns rounded result 
var weight = prompt("What is your weight in KG?");
var height = prompt("What is your height in meters?")

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}
console.log(bmiCalculator(weight, height));
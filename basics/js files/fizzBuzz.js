var output = [];
var num = 1;

function fizzBuzz() { 
  for (var num = 1; num < 101; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      output.push("FizzBuzz");
    } else if (num % 5 === 0) {
      output.push("Buzz")
    } else if (num % 3 === 0){
      output.push("Fizz")
    }
      else {
      output.push(num);
    }
  }
    console.log(output);
  } 
    
  




fizzBuzz();
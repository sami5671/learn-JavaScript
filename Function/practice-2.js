function make_avg(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  var avg = sum / 3;
  return avg;
}

// function calling
var number1 = 5;
var number2 = 5;
var number3 = 5;

var avg1 = make_avg(number1, number2, number3);

console.log(avg1);

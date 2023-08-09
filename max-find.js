// write a function that will take 3 numbers will return the max number
function maxNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

var number1 = 5;
var number2 = 6;
var number3 = 7;

const result = maxNumber(number1, number2, number3);
console.log(result);

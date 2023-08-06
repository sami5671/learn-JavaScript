function isEven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
// main
var firstNumebr = 4;
var secondNumber = 5;
var number1 = isEven(firstNumebr);
console.log(number1);
var number2 = isEven(secondNumber);
console.log(number2);

// types of data types
var price = 100;
console.log(typeof price);

var price = "100";
console.log(typeof price);

var isHappy = true;
console.log(typeof isHappy);

var romantic;
console.log(typeof romantic);

// toFixed
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2); //it will give us string value
sum = parseFloat(sum); //it will give us floating number
console.log(sum);

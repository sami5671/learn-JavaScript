// there are two string added normally
var price1 = "31";
var price2 = "10";
var totalPrice = price1 + price2;

console.log(totalPrice);

// if one item is string one is not then it will give output as a string
var price1 = 31;
var price2 = "10";
var totalPrice = price1 + price2;

console.log(totalPrice);

// convert string to number(integer number)
var price = "50";
console.log(price);
var priceNumber = parseInt(price);
console.log(priceNumber);

// convert string to number(Float number)
var gpa = "3.90";
var gpaNumber = parseInt(gpa);
console.log(gpaNumber); //it will give output the integer part

// it will give full floating point number
var gpa = "3.90";
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);

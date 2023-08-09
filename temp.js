let num1 = 5;
let num2 = 7;

// approach-----swaping---1
const temp = num1;
num1 = num2;
num2 = temp;

console.log("swap values are: ", num1, num2);

// approach -----Destructuring method------2
[num1, num2] = [num2, num1];
console.log(num1, num2);

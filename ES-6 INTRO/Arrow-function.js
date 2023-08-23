// function declaration

// function add(a, b) {
//   const result = a + b;
//   return result;
// }

function add(a, b) {
  return a + b;
}
const sum = add(5, 6);
console.log(sum);

// function expression
const add2 = function (a, b) {
  return a + b;
};

// Arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;

const mul = multiply(3, 12);
console.log(mul);

// function multiplication(numbers) {
//   let result = 1;
//   for (let i = 1; i <= numbers; i++) {
//     result = result * i;
//   }
//   return result;
// }

// var result = multiplication(4);
// console.log(result);

function factorial(number) {
  var result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

const number = 6;
const fact = factorial(number);
console.log("factorial of number: ", number, fact);

// function factorial(number) {
//   var result = 1;
//   for (let i = number; i >= 1; i--) {
//     result = result * i;
//   }
//   return result;
// }

// var result = factorial(4);
// console.log(result);

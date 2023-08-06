function factorial(number) {
  let num = 1;
  let result = 1;
  while (num <= number) {
    result = result * num;
    num++;
  }
  return result;
}

var number = 4;
let result = factorial(number);
console.log(result);

// reverse way
// function factorial(number) {
//   let i = number;
//   let result = 1;
//   while (i >= 1) {
//     result = result * i;
//     i--;
//   }
//   return result;
// }

// var number = 4;
// let result = factorial(number);
// console.log(result);

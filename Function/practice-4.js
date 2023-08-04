function odd_even(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// main
var number = 7;
var oddOrEven = odd_even(number);
console.log(oddOrEven);

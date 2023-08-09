function maxInArray(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    // const index = i;
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

// main
const heights = [123, 343, 143, 455, 666];
const tallest = maxInArray(heights);
console.log(tallest);

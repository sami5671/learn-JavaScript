function minInArray(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < min) {
      min = element;
    }
  }
  return min;
}

const numberInArray = [12, 23, 44, 3, 34, 51, 1];
const minimum = minInArray(numberInArray);
console.log(minimum);

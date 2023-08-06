function getSumOfArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
  return sum;
}

const myNumbers = [12, 13, 14, 15, 16, 17];
getSumOfArray(myNumbers);

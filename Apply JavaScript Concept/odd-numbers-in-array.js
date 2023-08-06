function getSumOfArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    // console.log(index, element, sum);
  }
  return sum;
}

function getOddNumbers(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 !== 0) {
      console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const myNumbers = [12, 13, 14, 15, 16, 17];
var oddNumbers = getOddNumbers(myNumbers);
console.log(oddNumbers);

// to find odd numbers sum
const oddNumberSum = getSumOfArray(oddNumbers);
console.log("odd number sum: ", oddNumberSum);

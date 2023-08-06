function findLeapYear(numbers) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    if (element % 4 == 0) {
      newArray.push(element);
    }
  }
  return newArray;
}

// main
var arr = [2023, 2024, 2025, 2028, 2030];
var newArray = findLeapYear(arr);
console.log(newArray);

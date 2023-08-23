const average = (parameter) => {
  let sum = 0;
  for (const arrayNumbers of parameter) {
    let square = arrayNumbers * arrayNumbers;
    sum = square + sum;
  }
  let average = sum / parameter.length;
  return average;
};

const array = average([1, 2, 3, 4, 5]);
// const array = [1, 2, 3, 4, 5];
console.log(`Average of the array square element is:`, array);

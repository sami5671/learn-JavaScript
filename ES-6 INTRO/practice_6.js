const merge = (parameter1, parameter2) => {
  const array3 = [...array1, ...array2];
  let number;
  for (const arrayNumbers of array3) {
    number = arrayNumbers;
  }
  let max = Math.max(number);
  return max;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 100];
const arrays = merge(array1, array2);

console.log(arrays);

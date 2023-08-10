function sortMaker(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[0] < 0 || arr[1] < 0) {
      return "Invalid Input";
    } else if (arr[0] === arr[1]) {
      return "equal";
    } else if (arr[i] > 0) {
      let result = arr.sort((a, b) => b - a);
      newArr.push(result);
      return newArr;
    }
  }
}

const array = [3, 3];
const result = sortMaker(array);
console.log(result);

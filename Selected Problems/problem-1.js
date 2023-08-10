function cubeNumber(number) {
  if (isNaN(number)) {
    return "Error---invalid input entered!!!!";
  }
  const result = number * number * number;
  return result;
}

// main
const number = cubeNumber("dw");
console.log(number);

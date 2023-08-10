function canPay(changeArray, totalDue) {
  if (changeArray.length == 0) {
    return "Array is empty, cannot buy anything!!!";
  }
  let sum = 0;
  for (let i = 0; i < changeArray.length; i++) {
    let taka = changeArray[i];
    sum = sum + taka;
  }
  if (sum >= totalDue) {
    return true;
  } else {
    return false;
  }
}

const arr = [1, 5, 5];
const price = 10;

const cPrice = canPay(arr, price);
console.log(cPrice);

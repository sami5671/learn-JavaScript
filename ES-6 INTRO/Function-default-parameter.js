// default: ---> if the value is not provided, take this as a default
function add(num1, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}

const sum1 = add(1);
const sum = add(5, 2);

// for string default value is empty string
function fullName(first, last = "") {
  const full = first + " " + last;
  return full;
}

// for array default value is empty array
function friends(num = []) {
  // ----------
}

// for object default value is empty object
function person(human = {}) {
  // ------
}

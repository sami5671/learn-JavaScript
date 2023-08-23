// arrow function
const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

// object in arrow function
const getAge = (person) => person.age;
const student = { name: "sami alam", age: 10 };
const studentAge = getAge(student);
console.log(studentAge);

// Array in arrow function
// const getThird = numbers => numbers[2];// we can use bracket () or not if the parameter is only one
const getThird = (numbers) => numbers[2];
const third = getThird([1, 23, 4, 5, 56, 5]);
console.log(third);

const doubleIt = (num) => num * 2;

// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function. if you want to get anything returned from this function then you have to use the return keyword
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mul = x * y * z;
  const result = sum + mul;
  return result;
};

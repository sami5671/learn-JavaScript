// Math.abs ------------which will take only numbers positive negative doesn't matter
const result = Math.pow(3, 8);
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
console.log(gap);

if (gap < 5) {
  console.log("you guys can be friends");
} else {
  console.log("you guys can be not friends");
}

// Math.round
const number = 2.5234;
const fullNumber = Math.round(number);
// console.log(fullNumber);

// math.ceil  math.floor
const result1 = Math.ceil(2.00002);
const result2 = Math.floor(24.23);
console.log(result2);

//------------------
// random
const random1 = Math.round(Math.random() * 100); // will give only random integer value
const random2 = Math.random() * 100; //will give floating point value
console.log(random2);

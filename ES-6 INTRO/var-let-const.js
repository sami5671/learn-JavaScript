// var: no reason to use var
// let: allow it to reassign
// const: do not allow it to reassign

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

//const count = 0; //TypeError: Assignment to constant variable.
// count = count + 10;
// console.log(count);

const numbers = [12, 24, 455, 515];
// when it is const the array cannot be reassign
// numbers = [4,5,6,7,8];

numbers[1] = 55;
console.log(numbers);
numbers.push(8, 9, 65);
console.log(numbers);

// object
// when it is const the object cannot be reassign
const student = {
  name: "moyna paki",
  class: 12,
};
// student = { name: "sami" };
student.name = "sami alaam";
console.log(student);

// object
// when it is let the object can be reassign
let student1 = {
  name: "moyna paki",
  class: 12,
};
student1 = { name: "sami" };
console.log(student1);

// loop
// const sum = 0;
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = sum + i;
}
console.log(sum);

const actor = {
  name: "Md. Sami Alam",
  age: 30,
  phone: "017189373443",
  money: 12345677473,
};

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

// fi right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value
const { phone, age } = actor;
// const { phone, age: boyosh } = actor;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

console.log(age);

// Array Destructuring
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

// ----------advanced
function doubleThem(a, b) {
  return [a * 2, b * 2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);

// For of use on array or string not in object
// For in use on object
const numbers = [1, 23, 4, 56, 5];
// for (let i = 0; i < number.length; i++) {}
// while

for (const num of numbers) {
  console.log(num);
}

const nobab = "siraj ud doula";
for (const char of nobab) {
  console.log(char);
}

const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

for (const key in glass) {
  const value = glass[key];
  console.log(key, value);
}

// optional
const keys = Object.keys(glass);
console.log(keys);

for (const key of keys) {
  const value = glass[key];
  console.log(key, value);
}

/**
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4. Arrow function
 * 5. destructuring
 * 6. object.keys, objects.values, ES-6: objects.entries
 * 7. for of used in array and string
 * 8. for in loop used in object
 * 9.
 */

const a = 56;
const numbers = [56, 24, 35];
const person = {
  name: "sami alam",
};

const message = `HI, ${person.name} has a: ${a} access to ${numbers[2]}`;

if (true) {
}

// 4. Arrow function
const square = (x) => x * x;
const sum = (a, b) => a + b;

// 5. destructuring
const { age, z, ...others } = { x: 2, y: 5, z: 3, name: "sami", age: 55 };
const [first, second, ...remaining] = ["sam", "rakib", "jodu", "kodu"];

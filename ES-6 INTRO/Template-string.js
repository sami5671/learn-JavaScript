const first = "sami";
const last = "alam";
const greet = "alo potash";

const name = first + " " + last + " " + greet;
console.log(name);

const a = 10;
const b = 20;
const result = "The sum of " + a + " and " + b + " is " + (a + b);
console.log(result);

// using template string ``
const math = `The sum of ${a} and ${b} is ${a + b}`;
console.log(math);

// -------
const eamil = "Hi Jhon \n" + "cena cena lage \n" + "tumi mara mari korba naki";
console.log(eamil);

// using template string
const challenge = `Jhon cena
cena cena lage tmumi boro ocena
mair dimu naki`;

console.log(challenge);

// ----------------
const numbers = [45, 48, 98, 78];
const student = { name: "jhon cena", age: 5 };

const addition = `The sum of ${numbers[0]} and ${student.age} is ${
  numbers[0] + student.age
}`;

console.log(addition);

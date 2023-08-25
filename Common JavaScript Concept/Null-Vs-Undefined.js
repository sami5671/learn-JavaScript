/** 8 ways to get Undefine
 * 1. variable that is not initialized will
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that doesn't exists on an object will give you undefined
 * 6. accessing array elements outside of the index range will give us undefined
 * 7. deleting an element inside an array
 * 8. set a value directly to undefined
 *
 */
let first;
// console.log(first);

function second(a, b) {
  const total = a + b;
}
const result = second();
// console.log(result);

function third(a, b, c, d) {
  const total = a + b + c + d;
  //   console.log(a, b, c, d);
}

third(2, 4);
// console.log(third());

function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}

const total = noNegative(2, -5);
// console.log(total);

const fifth = { id: 2, name: "ponchom", age: 40 };
// console.log(fifth.age, fifth.salary);

const six = [4, 54, 4, 46, 462, 224];
// you should not do it. instead use splice
delete six[1];

console.log(six[1], six[5], six[244]);
console.log(six);

const eight = undefined;
const nine = null;

const data = { result: [], update: null };

console.log(typeof undefined);
console.log(typeof null);

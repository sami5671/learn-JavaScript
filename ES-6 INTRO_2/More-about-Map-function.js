const numbers = [1, 4, 5, 7, 8];

const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// add
const fiveBonus = numbers.map((num) => num + 5);
console.log(fiveBonus);

// div
const div = numbers.map((num) => num / 2);
console.log(div);

// string
const friends = ["sami", "hello", "world", "sabrina"];
const lenghts = friends.map((frnd) => frnd.length);
console.log(lenghts);

const firstLetter = friends.map((friend) => friend[0]);
console.log(firstLetter);

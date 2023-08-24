// For each
const numbers = [1, 3, 45, 5, 4, 11];
const result = numbers.forEach((n) => console.log(n));
console.log(result);

// filters selects elements based on a condition and returns an array with the elements that fulfilled the condition
const number = [2, 5, 6, 26, 6, 26];
const players = [3, 53, 6, 73, 52];
// const selected = players.filter((p) => p > 70);
// const selected = players.filter((p) => p < 70);
// const selected = players.filter((p) => p > 90);
const selected = players.filter((p) => p % 2 == 1);
console.log(selected);

// string filter
const friends = ["sami", "world", "hello", "sabrina"];
const oddFriends = friends.filter((n) => n.length > 4);
console.log(oddFriends);

// find function
const findAnything = friends.find((n) => n.length > 4);
console.log(findAnything); //it will not give us an array, just wee will got only the first element of the array

/**
 * 1. map
 * 2. forEach
 * 3. filter
 * 4. find
 */

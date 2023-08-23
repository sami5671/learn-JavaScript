const max = Math.max(24, 5, 56, 74, 782, 2);
const numbers = [1, 3, 5, 6, 7, 4, 224, 25];
const arrayMax = Math.max(...numbers);
console.log(...numbers);
console.log(arrayMax);

// use spread operator to copy (it will not hold the memory references )
const friends = [4, 5, 6, 7, 8];
const bondhu = friends;

const dosto = [...friends];
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);

// advance spread operator
const shonka = [...friends, 99999]; //add extra elements while copy
console.log(shonka);


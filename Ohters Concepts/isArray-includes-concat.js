const country = "bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: "sami" };
const friends = [13, 14, 14, 5, 56];
function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);

// check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

// -------------includes -----------------
console.log(friends.includes(11));
console.log(friends.includes(13));

// ----------indexOf-----------------
if (friends.indexOf(2432) !== -1) {
}

// concat
const newFriendsAge = [12, 13, 14, 15];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);

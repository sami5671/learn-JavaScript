//Use push to addd element to an array as the last element array (Push operation)
var numbers = [78, 45, 98, 45];
numbers.push(63);
console.log(numbers);

var friends = ["balam", "kalam", "salam"];
friends.push("sami");
friends.push("Alam");
console.log(friends);

// use pop to get last element
numbers.pop();
console.log(numbers);

// to get the element which has been poped
var element = numbers.pop();
console.log(numbers);
console.log(element);

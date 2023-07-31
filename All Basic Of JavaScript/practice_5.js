var fruits = ["Apple", "banana", "orange"];
//  find the index of banana and replace banana with mango
var index = fruits.indexOf("banana");
console.log(index);

fruits[1] = "mango";
console.log(fruits);

fruits.pop();
fruits.push("watermelon");
console.log(fruits);

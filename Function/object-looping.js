// Array VS Object
var ShoppingItems = ["books", "sunglasses", "shoes", "pen"];
var friendsAge = [12, 45, 78, 12, 32, 14];

var friendsAge = {
  rahim: 12,
  samad: 34,
  sami: 21,
  rafi: 31,
  jamal: 24,
  karim: 131,
};

var ShoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
  bottles: 23,
};

// shows all properties
const keys = Object.keys(ShoppingCart);
console.log(keys);

// show all values
const values = Object.values(ShoppingCart);
console.log(values);

//get properties and values using loop
for (var i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertyValue = ShoppingCart[propertyName];
  //   console.log(propertyName, propertyValue);
}

// using for in loop another way to get properties and values
for (var propertyName in ShoppingCart) {
  const value = ShoppingCart[propertyName];
  console.log(propertyName, value);
}

var ShoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};
// when you know the specific property name, use dot notation to get the property value
var penCount = ShoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation to get the property value
var penCount2 = ShoppingCart["pen"];

// access dynamically properties and value
var propertyName = "pen";
var propertyValue = ShoppingCart[propertyName];
console.log(propertyName, propertyValue);

var properties = Object.keys(ShoppingCart);
var propertyValue = Object.values(ShoppingCart);

// console.log(properties);
// console.log(propertyValue);

console.log(ShoppingCart);
// set property values
ShoppingCart.mouse = 15;
console.log(ShoppingCart);
ShoppingCart["mouse"] = 29;
console.log(ShoppingCart);
ShoppingCart[propertyName] = 89;
console.log(ShoppingCart);

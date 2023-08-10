//
function totalCost(products) {
  var sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    // console.log(product);
    var totalShoppingCost = product.price * product.quantity;
    sum = sum + totalShoppingCost;
  }
  return sum;
}

// main
const shoppingCart = [
  { name: "shoe", price: 1200, quantity: 5 },
  { name: "shirt", price: 2200, quantity: 5 },
  { name: "pant", price: 2300, quantity: 5 },
  { name: "belt", price: 4200, quantity: 5 },
];

let expenses = totalCost(shoppingCart);
console.log("total expense: ", expenses);

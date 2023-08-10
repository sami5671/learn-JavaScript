//
function totalCost(products) {
  var sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    // console.log(product);
    sum = sum + product.price;
  }
  return sum;
}

// main
const shoppingCart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 2200 },
  { name: "pant", price: 2300 },
  { name: "belt", price: 4200 },
];

let expenses = totalCost(shoppingCart);
console.log("total expense: ", expenses);

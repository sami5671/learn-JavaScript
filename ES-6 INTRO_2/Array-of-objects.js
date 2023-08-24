const products = [
  { id: 1, name: "lenevo", price: 60000 },
  { id: 2, name: "HP", price: 80000 },
  { id: 3, name: "ITI", price: 40000 },
  { id: 3, name: "UCG", price: 3000 },
  { id: 4, name: "UPS", price: 100000 },
];

// map
const productsName = products.map((p) => p.name);
console.log(productsName);
const productsPrices = products.map((p) => p.price);
console.log(productsPrices);

// forEach
products.forEach((p) => console.log(p.id));

// filter
const expensiveProducts = products.filter((p) => p.price > 50000);
console.log(expensiveProducts);

// find
const affordable = products.find((p) => p.price < 50000); //will give us the result based on only first price
console.log(affordable);

// reduce
const total = products.reduce(
  (previous, current) => previous + current.price,
  0
);
console.log(total);

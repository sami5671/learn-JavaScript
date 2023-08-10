const numbers = [12, 14, 45, 15, 6, 67, 8];

// for (let i = 0; i <= numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

// same loop another approach
for (const number of numbers) {
  console.log(number);
}

// matched products
const products = [
  { id: 1, name: "xiomai phone", price: 149999 },
  { id: 2, name: "walton Phone", price: 149999 },
  { id: 3, name: "mac book air", price: 149999 },
  { id: 4, name: "lenevo laptop", price: 149999 },
  { id: 5, name: "dell laptop ", price: 149999 },
  { id: 6, name: "samsung phone", price: 149999 },
  { id: 7, name: "nokia old age Phone gone ", price: 149999 },
  { id: 8, name: "one phone", price: 149999 },
];

// for (const product of products) {
//   console.log(product);
// }

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProducts(products, "phone");
console.log(result);

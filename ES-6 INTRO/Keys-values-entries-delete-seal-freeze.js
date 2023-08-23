const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

console.log(glass);

const keys = Object.keys(glass); //it will give us properties name
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys);

const value = Object.values(glass); //it will give us properties values
// [ 'glass', 'golden', 12, true ]
console.log(value);

// Array of array, two dimentional array
const pair = Object.entries(glass);
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]
console.log(pair);

// delete object properties
// delete glass.isCleaned;
// console.log(glass);

//

const { isCleaned, ...shortGlass } = glass;
console.log(glass);
console.log(shortGlass);

// freeze
Object.freeze(glass); //it will not change the values odd add delete when it is open
glass.source = "bangladesh";
glass.price = 30000;
delete glass.name;
console.log(glass);

// seal
Object.seal(glass); //it will modify the properties value but will not add any new properties
glass.source = "bangladesh";
glass.price = 30000;
delete glass.name;
console.log(glass);

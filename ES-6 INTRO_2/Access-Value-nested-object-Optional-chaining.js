// data access
const data = [{ id: 1, name: "abul", address: "kocu Khet" }];
console.log(data[0].address);

// ---------
const products = {
  count: 5000,
  data: [
    { id: 1, name: "lenevo laptop", price: 2344444 },
    { id: 1, name: "HP laptop", price: 2344444 },
  ],
};

// second product price
console.log(products.data[1].price);

// example---2
const user = {
  id: 5001,
  name: "sami alam",
  address: {
    street: {
      first: "54/1 uttor side",
      second: "savar, dhaka",
      third: "no dorai",
    },
    city: "Dhaka",
  },
};

// access the second
// console.log(user.address.street.second); //this is chain

// optional chaining
const user2 = {
  id: 5002,
  name: "majar road savar",
  address: {
    city: "chittagong",
    country: "bangladesh",
  },
};
//optional chain determines that weather there is a value or not
// (if there is a properties value it will show it otherwise it will give use undefined)
console.log(user.address.street?.second);
console.log(user2.address.street?.second);

function cheapestPhone(phones) {
  var cheapPhone = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapPhone.price) {
      cheapPhone = phone;
    }
  }
  return cheapPhone;
}

const phones = [
  {
    name: "samsung",
    camera: 12,
    Storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "walton",
    camera: 12,
    Storage: "32gb",
    price: 32000,
    color: "silver",
  },
  {
    name: "iphone",
    camera: 12,
    Storage: "32gb",
    price: 300000,
    color: "silver",
  },
  { name: "oppo", camera: 12, Storage: "32gb", price: 123000, color: "silver" },
  {
    name: "xaomi",
    camera: 12,
    Storage: "32gb",
    price: 2000,
    color: "silver",
  },
  { name: "nokia", camera: 12, Storage: "32gb", price: 26000, color: "silver" },
  { name: "HTC", camera: 12, Storage: "32gb", price: 16000, color: "silver" },
];

const phone = cheapestPhone(phones);
console.log(phone);

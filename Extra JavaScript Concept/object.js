const student = {
  name: "sakib khan",
  id: 121,
  address: "movie name",
  isSingle: true,
  Friends: ["Apu", "raaz", "salman", "shabab"],
  act: function () {
    console.log("acting like sami");
  },
  movies: [
    { name: "no. 1", year: 2019 },
    { name: "king khan", year: 2402 },
  ],

  car: {
    brand: "tesla",
    price: 500000,
    made: 2093,
    manufacturer: {
      name: "tesla",
      ceo: "elon mask",
      country: "USA",
    },
  },
};

console.log(student);
console.log(student.act);
student.act();

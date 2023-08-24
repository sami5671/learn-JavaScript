// task-2 console the secondary location of sophia
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary schoool" },
          { location: "Peters Burgs" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary School" },
          { location: "St Lorence" },
        ],
      },
    ],
  },
};
// console.log(data.Sophia.study[1].secondary[1].location);

// task -2: console output peterburgs, herry
let students = {
  2222: {
    name: "jack",
    section: "c",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "perterburg",
      country: "UK",
    },
  },
  3333: {
    name: "Harry",
    section: "d",
    class: "IXXX",
    address: {
      "building no": 90,
      street: "St. Jonson",
      city: "Kkdfnkwsg",
      country: "Bangladesh",
    },
  },
};

// console.log(students["2222"].address.city);
// console.log(students[3333].name);

// task 3: access and then show habluder adda
// show output beginner
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "29$",
      },
      booCategory: "basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "35$",
      },
      bookCategory: "Beginner",
    },
  ],
};

// console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCategory);

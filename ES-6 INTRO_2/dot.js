const Person = {
  name: "kodom ali",
  job: "badam khai",
  3: "third",
  "add-dress": "kochu khet",
};

const prop = "job";
console.log(Person.job);
console.log(Person["job"]);
console.log(prop);

// special to access because  properties names are not like regular property name
console.log(Person["3"]);
console.log(Person["add-dress"]);

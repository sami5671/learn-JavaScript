const friends = (parameter1) => {
  const friendsName = Object.values(parameter1);
  const array = [];
  for (const names of friendsName) {
    if (names.length % 2 == 0) {
      array.push(names);
    }
  }
  return array;
};

const parameter = friends(["sami", "alamm", "sarif", "jnifar"]);
console.log(parameter);

function findAddress(obj) {
  let values = Object.values(obj);
  let add = values.join(",");
  return add;
}

const object = { street: 10, society: "Earth Perfect" };
const result = findAddress(object);
console.log(result);

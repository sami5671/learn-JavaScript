// always use ===
// qual comparison doesn't work for non-primitive

const first = 1;
const second = false;
if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
// const first = 2;
// const second = "2";
// if (first === second) {
//   console.log("values are equal");
// } else {
//   console.log("values are not equal");
// }
// output: value are not equal

// type coercion
// type conversion
// type casting

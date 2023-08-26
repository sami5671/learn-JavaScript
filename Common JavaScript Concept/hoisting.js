print5();
print10();
// Block scope
for (var i = 0; i < 5; i++) {
  //   console.log(i);
}
// console.log("Outside: ", i); //for hoisting it is showing the output (scope ar bayreo kaj kore var)

for (let i = 0; i < 5; i++) {
  //   console.log(i);
}
// console.log("Output: ", i); //it will give us error(because let remains inside the scope)

// global scope
function print5() {
  console.log("inside print5: ", 5);
}

// it will give an error of print10() is not a function
var print10 = function () {
  console.log("inside print5: ", 10);
};

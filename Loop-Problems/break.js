// for (var i = 0; i <= 20; i++) {
//   console.log(i);
//   if (i > 5) {
//     break;
//   }
// }

var roastGiven = 0;
while (roastGiven < 10) {
  console.log("roast den gift ansi");
  roastGiven++;

  if (roastGiven > 4) {
    break;
  }
}

// break example
console.log("for loop ");

var items = ["bottle", "mouse", "sunglasses", "pen"];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  if (item == "sunglasses") {
    break;
  }
  console.log(item);
}

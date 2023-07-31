var money = 10;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice < money) {
  console.log("dan dan danish khamu!!1");
} else if (butterBread < money) {
  console.log("butter bon khamu");
} else if (toastBiscuit < money) {
  console.log("toast khamu");
} else {
  console.log("kocu khamu");
}

// nested condition
var math = true;
var geometry = true;
var straightLine = false;

if (math == true) {
  if (geometry == true) {
    if (straightLine) {
    } else {
      console.log("baka potha colba na");
    }
  }
} else {
  console.log("pithagoras hote parba na");
}

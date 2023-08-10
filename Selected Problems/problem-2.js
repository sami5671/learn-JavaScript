function matchFinder(string1, string2) {
  if (typeof string1 == "string" && typeof string2 == "string") {
    if (string1.indexOf(string2) !== -1) {
      return true;
    } else {
      return false;
    }
  } else {
    return "invalid input!!!";
  }
}

var string1 = "John Doe";
var string2 = "ohn";
var result = matchFinder(string1, string2);
console.log(result);

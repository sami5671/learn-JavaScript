function reverseString(text) {
  let reversed = " ";
  for (i = text.length - 1; i >= 0; i--) {
    var element = text[i];
    reversed = reversed + element;
    console.log(element, reversed);
  }
  return reversed;
}

const myString = " hello";
const reversed = reverseString(myString);
console.log("reversed output: ", reversed);

function reversedWords(str) {
  const words = str.split(" ");
  const newContainer = [];
  //   console.log(words);
  for (let i = words.length - 1; i >= 0; i--) {
    let element = words[i];
    newContainer.push(element);
  }
  return newContainer;
}

// main
const myString = "i am a good boy";
const result = reversedWords(myString);
console.log(result);
const reversedResult = result.join(" ");
console.log(reversedResult);

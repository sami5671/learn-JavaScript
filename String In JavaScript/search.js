const lyrics = "Tumi bondhu kala phaki ami jeno ki";

const searchString = "Phaki";

// const doesExist = lyrics.includes("phaki");
// const doesExist = lyrics.includes("phaki");
// const doesExist = lyrics.includes(searchString);

// const lyricsLowerCase = lyrics.toLocaleLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);

const doesExistOneLine = lyrics
  .toLowerCase()
  .includes(searchString.toLowerCase());
console.log(doesExistOneLine);

// -----------------
// indexOf
console.log(lyrics.indexOf("kala"));
console.log(lyrics.indexOf("Tumi"));

if (lyrics.indexOf("sada") !== -1) {
  console.log("exists inside the string");
} else {
  console.log("cannot find it");
}

// startsWith
console.log(lyrics.startsWith("tumi"));

// endswith
const fileName = "mybiodata.pdf";
const otherFile = "mypic.pdf";

console.log(fileName.endsWith(".pdf"));

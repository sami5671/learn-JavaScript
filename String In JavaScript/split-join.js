// split
const lyrics =
  "Tumi bondhu kala phaki ami jeno. bosonto kale tomai bolte pari ni.";

const parts = lyrics.split(" ");
const sentences = lyrics.split(".");
const chars = lyrics.split("");
console.log(chars);

// slice
const partial = lyrics.slice(5, 8);
console.log(partial);

const partial2 = lyrics.substring(5, 8);
console.log(partial2);

// join
const lines = [
  "Tumi bondhu kala phaki ami jeno",
  "bosonto kale tomai bolte pari ni",
  "bosonto kale tomai bolte pari ni.",
];

const newSong = lines.join(". ");
console.log(newSong);

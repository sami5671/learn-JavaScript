function milesToKilo(miles) {
  const kilometer = miles * 1.609;
  return kilometer;
}

const a = 300;
const kilo = milesToKilo(a);
console.log(kilo);

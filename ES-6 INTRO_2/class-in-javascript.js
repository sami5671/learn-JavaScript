const products = [
  { id: 1, name: "lenevo", price: 60000 },
  { id: 2, name: "HP", price: 80000 },
  { id: 3, name: "ITI", price: 40000 },
  { id: 3, name: "UCG", price: 3000 },
  { id: 4, name: "UPS", price: 100000 },
];

//   has some properties, method
class Products {
  country = "bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`taking about ${talk}`);
  }
}

const lenevo = new Products();
console.log(lenevo);
lenevo.speak(`oba kamon aso`);

// -----------------------------
class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log(`sir is teaching math`);
  }
}

const tapan = new Teacher("Tapon sir", "Physics");
console.log(tapan);
tapan.lecture();

// -----------------------------
const rashid = new Teacher("Rashid", "English");
console.log(rashid);

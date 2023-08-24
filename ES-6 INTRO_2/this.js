class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`Sleeping now ${this.name}`);
  }
  activity() {
    this.sleep();
  }
}

const kodom = new Person("kodom Ali", 21);
console.log(kodom);
kodom.sleep();

const sami = new Person("sami alam", 21);
sami.sleep();

// bhejal
// const lazy = kodom.sleep;
// lazy();

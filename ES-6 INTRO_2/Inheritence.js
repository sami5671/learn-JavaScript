class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log(`gari cole na cole na cole na re gari cole na`);
  }
}

class Bus extends Vehicle {
  constructor(name, price, seat, ticketPrice) {
    super(name, price);
    this.seat = seat;
    this.ticketPrice = ticketPrice;
  }
}

class Truck extends Vehicle {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}

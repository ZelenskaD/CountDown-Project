//=========================Car OO Challenge /Part One

class Vehicle {
  constructor(make, model, year) {
    console.log("INSIDE VEHICLE CONSTR!");
    this.make = make;
    this.model = model;
    this.year = year;
  }

  toString() {
    return `The vehicle is ${this.make} ${this.model} from ${this.year}.`;
  }
  honk() {
    return "Beep!";
  }
}
//=========================/Part Two
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk());

class Car extends Vehicle {
  constructor(make, model, year) {
    console.log("INSIDE CAR CONSTRUCTOR!");
    super(make, model, year);
  }

  revEngine() {
    return "Beep";
  }
  numWheels() {
    return 4;
  }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString());
//=========================/Part Three

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    console.log("INSIDE MOTO CONSTRUCTOR!");
    super(make, model, year);
  }
  numWheels() {
    return 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

//=========================/Part Four

class Garage {
  constructor(capacity) {
    console.log("INSIDE GARAGE CONST");
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      throw new Error("Only vehicles are allowed in here!");
    }
    if (this.vehicles.length >= this.capacity) {
      throw new Error("Sorry, we're full.");
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}
let garage = new Garage(2);

class Parking {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  addCar(carModel, carNumber) {
    if(this.capacity === 0){
      throw new Error(`Not enough parking space.`);
    }
    this.vehicles.push({
      carModel,
      carNumber,
      payed: false,
    })
    this.capacity--;
    return `The ${carModel}, with a registration number ${carNumber}, parked.`;
  }

  removeCar(carNumber) {
    let carIndex = this.vehicles.findIndex(car => car.carNumber === carNumber);

    if(carIndex < 0){
      throw new Error(`The car, you're looking for, is not found.`);
    }

    if(!this.vehicles[carIndex].payed){
      throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
    }

    this.vehicles.splice(carIndex, 1);
    this.capacity++;
    return `${carNumber} left the parking lot.`;
  }

  pay(carNumber) {
    let car = this.vehicles.find(car => car.carNumber === carNumber);
    if(!car){
      throw new Error(`${carNumber} is not in the parking lot.`);
    }
    if(car.payed){
      throw new Error(`${carNumber}'s driver has already payed his ticket.`);
    }

    car.payed = true;
    return `${carNumber}'s driver successfully payed for his stay.`;
    
  }

  getStatistics(carNumber) {
    if (!carNumber) {
      let sorted = this.vehicles
      .sort((a, b) => a.carModel.localeCompare(b.carModel))
      .map((car) => `${car.carModel} == ${car.carNumber} - ${car.payed ? "Has payed" : "Not payed"}`).join('\n')
      return [
        `The Parking Lot has ${this.capacity} empty spots left.`,
        sorted
      ].join('\n')
  }
  let car = this.vehicles.find((car) => car.carNumber == carNumber);
  car.payed = true
  return `${car.carModel} == ${car.carNumber} - ${car.payed ? "Has payed" : "Not payed"}`
 }
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Volvo t400", "TX3691CD"));
console.log(parking.addCar("Volvo t500", "TX3691CS"));
console.log(parking.addCar("Volvo t200", "TX3691CB"));
console.log(parking.addCar("Volvo t150", "TX3691CL"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
console.log(parking.getStatistics('TX3691CL'));

/* 
The Volvo t600, with a registration number TX3691CA, parked.
The Parking Lot has 11 empty spots left.
Volvo t600 == TX3691CA - Not payed
TX3691CA's driver successfully payed for his stay.
TX3691CA left the parking lot. 
*/

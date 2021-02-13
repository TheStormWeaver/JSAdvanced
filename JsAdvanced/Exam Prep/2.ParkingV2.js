class Parking {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  addCar(carModel, carNumber) {
    if (this.capacity > 0) {
      this.capacity--;
      this.vehicles.push({
        carModel,
        carNumber,
        payed: false,
      });
      return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    } else {
      throw new Error("Not enough parking space.");
    }
  }

  removeCar(carNumber) {
    let carIndex = this.vehicles.findIndex((car) => car.carNumber == carNumber);
    if (carIndex != -1) {
      if (this.vehicles[carIndex].payed == true) {
        this.vehicles.splice(carIndex, 1);
        this.capacity++;
        return `${carNumber} left the parking lot.`;
      } else {
        throw new Error(
          `${carNumber} needs to pay before leaving the parking lot.`
        );
      }
    } else {
      throw new Error("The car, you're looking for, is not found.");
    }
  }

  pay(carNumber) {
    let car = this.vehicles.find((car) => car.carNumber == carNumber);
    if (car) {
      if (car.payed == true) {
        throw new Error(`${carNumber}'s driver has already payed his ticket.`);
      } else {
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
      }
    } else {
      throw new Error(`${carNumber} is not in the parking lot.`);
    }
  }

  getStatistics(carNumber) {
    if (carNumber) {
      let car = this.vehicles.find((car) => car.carNumber == carNumber);
      return `${car.carModel} == ${car.carNumber} - ${car.payed ? "Has payed" : "Not payed"}`
    } else {
      return [
        `The Parking Lot has ${this.capacity} empty spots left.`,
        this.vehicles
          .sort((a, b) => a.carModel.localeCompare(b.carModel))
          .map((car) => `${car.carModel} == ${car.carNumber} - ${car.payed ? "Has payed" : "Not payed"}`)
      ].join('\n')
    }
  }
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
console.log(parking.getStatistics());

/* 
The Volvo t600, with a registration number TX3691CA, parked.
The Parking Lot has 11 empty spots left.
Volvo t600 == TX3691CA - Not payed
TX3691CA's driver successfully payed for his stay.
TX3691CA left the parking lot. 
*/

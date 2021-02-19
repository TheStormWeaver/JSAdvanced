class Vacationer {
  constructor(fullName, creditCard) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+\b/g;
    if (fullName.length != 3) {
      throw new Error("Name must include first name, middle name and last name");
    }
    if (pattern.test(fullName.join(" "))) {
      this.fullName = {
        firstName: fullName[0],
        middleName: fullName[1],
        lastName: fullName[2]
     }
     
    } else {
      throw new Error("Invalid full name");
    }
    if (creditCard) {
      let [cardNumber, expirationDate, securityNumber] = creditCard
      if (typeof cardNumber !== 'number' || typeof securityNumber !== 'number') {
          throw new Error("Invalid credit card details");
      }
      this.creditCard = {
          cardNumber,
          expirationDate,
          securityNumber
      }
    } else {
      this.creditCard = {
        cardNumber: 1111,
        expirationDate: "",
        securityNumber: 111,
      };
    }
    this.idNumber = ""
    this.wishList = []
    this.generateIDNumber()
  }

  generateIDNumber() {
    let firstLetter = this.fullName.firstName.charCodeAt(0)
    let middelName = this.fullName.middleName
    let lastChar = this.fullName.lastName[this.fullName.lastName.length - 1]
    let result = 231 * firstLetter + 139 * middelName.length
    if(lastChar == "a" || lastChar == "e" || lastChar == "o" || lastChar == "i" || lastChar == "u"){
      result += "8"
    }else{
      result += "7"
    }
    this.idNumber = result
  }

  addCreditCardInfo(input) {
    if(input.length < 3){
      throw new Error("Missing credit card information")
    }
    if (typeof input.cardNumber !== 'number' || typeof input.securityNumber !== 'number') {
      throw new Error("Invalid credit card details");
    }
    this.creditCard = {
      cardNumber: input.cardNumber,
      expirationDate: input.expirationDate,
      securityNumber: input.securityNumber
    }
  }

  addDestinationToWishList(destination) {
    if(this.wishList.includes(destination)){
      throw new Error("Destination already exists in wishlist")
    }
    this.wishList.push(destination)
    this.wishList.sort((a, b) => a.length - b.length)
  }

  getVacationerInfo() {
    let result = []
    result.push(`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`);
    result.push(`ID Number: ${this.idNumber}`);
    result.push('Wishlist:');
    if(this.wishList.length === 0){
     result.push('empty');
    }else{
      result.push(this.wishList.join(', '))
    }
    result.push('Credit Card:');
    result.push(`Card Number: ${this.creditCard.cardNumber}`);
    result.push(`Expiration Date: ${this.creditCard.expirationDate}`);
    result.push(`Security Number: ${this.creditCard.securityNumber}`);

    return result.join('\n').trim();
  }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(
  ["Tania", "Ivanova", "Zhivkova"],
  [123456789, "10/01/2018", 777]
);

// Should throw an error (Invalid full name)
try {
  let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
  console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
  let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
  vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
  console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList("Spain");
vacationer1.addDestinationToWishList("Germany");
vacationer1.addDestinationToWishList("Bali");

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());

/*
Error: Invalid full name

Error: Missing credit card information

Name: Vania Ivanova Zhivkova
ID Number: 208398
Wishlist:
Bali, Spain, Germany
Credit Card:
Card Number: 1111
Expiration Date:
Security Number: 111

Name: Tania Ivanova Zhivkova
ID Number: 203778
Wishlist:
empty
Credit Card:
Card Number: 123456789
Expiration Date: 10/01/2018
Security Number: 777

*/


class Bank{
  constructor(bankName){
    this._bankName = bankName
    this.allCustomers = []
  }
  newCustomer(customer){
    let person = this.allCustomers.find((person) => person.firstName == customer.firstName)
    if(person){
      throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
    }
    this.allCustomers.push(customer)
    return customer
  }
  depositMoney(personalId, amount){
    let id = this.allCustomers.find((person) => person.personalId == personalId)
    if(!id){
      throw new Error(`We have no customer with this ID!`)
    }
    if(!id.totalMoney){
      id.totalMoney = 0
    }
    id.totalMoney += amount
    if(!id.transactions){
      id.transactions = []
    }
    id.transactions.push(`${id.firstName} ${id.lastName} made deposit of ${amount}$!`)
    return `${id.totalMoney}$`
  }
  withdrawMoney(personalId, amount){
    let id = this.allCustomers.find((person) => person.personalId == personalId)
    if(!id){
      throw new Error(`We have no customer with this ID!`)
    }
    if(id.totalMoney < amount){
      throw new Error(`${id.firstName} ${id.lastName} does not have enough money to withdraw that amount!`)
    }
    id.totalMoney -= amount
    if(!id.transactions){
      id.transactions = []
    }
    id.transactions.push(`${id.firstName} ${id.lastName} withdrew ${amount}$!`)
    return `${id.totalMoney}$`
  }
  customerInfo(personalId){
    let id = this.allCustomers.find((person) => person.personalId == personalId)
    if(!id){
      throw new Error(`We have no customer with this ID!`)
    }
    let result = `Bank name: ${this._bankName}\nCustomer name: ${id.firstName} ${id.lastName}\nCustomer ID: ${id.personalId}\nTotal Money: ${id.totalMoney}$\nTransactions:\n`
    for (let i = id.transactions.length - 1; i > -1; i--) {
      let transaction = id.transactions[i]
      result += `${i + 1}. ${transaction}\n`
    }
    return result.trim()
  }
}
let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

/*
{ firstName: ‘Svetlin’, lastName: ‘Nakov’, personalId: 6233267 } 
{ firstName: ‘Mihaela’, lastName: ‘Mileva’, personalId: 4151596 }
500$
375$
Bank name: SoftUni Bank
Customer name: Svetlin Nakov
Customer ID: 6233267
Total Money: 375$
Transactions:
3. Svetlin Nakov withdrew 125$!
2. Svetlin Nakov made depostit of 250$!
1. Svetlin Nakov made depostit of 250$!
*/


function fruits(fruit, weight, price) {
  let toKilo = (weight / 1000).toFixed(2)
  let amountNeeded = (price * toKilo).toFixed(2)
 return `I need $${amountNeeded} to buy ${toKilo} kilograms ${fruit}.`
}
console.log(fruits('orange', 2500, 1.80));

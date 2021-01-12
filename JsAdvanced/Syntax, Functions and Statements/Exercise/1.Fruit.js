function fruits(fruit, weight, price) {
  let toKilo = weight / 1000
  let amountNeeded = price * toKilo
 return `I need $${amountNeeded.toFixed(2)} to buy ${toKilo.toFixed(2)} kilograms ${fruit}.`
}
console.log(fruits('orange', 2500, 1.80));

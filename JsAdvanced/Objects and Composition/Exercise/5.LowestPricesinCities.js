function lowestPrices(input) {
  let log = {};
  for (const line of input) {
    let [town, product, price] = line.split(" | ");
    price = Number(price)
    if (!log.hasOwnProperty(product)) {
      log[product] = {};
      log[product].town = town;
      log[product].price = price;
    }
    if (log[product].price > price) {
      log[product].town = town;
      log[product].price = price;
    }
  }
  let result = [];
  for (const key in log) {
    result.push(`${key} -> ${log[key].price} (${log[key].town})`);
  }
  return result.join("\n");
}
console.log(
  lowestPrices([
    "Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "New York City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Mexico City | Audi | 100000",
    "Washington City | Mercedes | 1000",
  ])
);

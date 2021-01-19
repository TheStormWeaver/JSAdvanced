function lowestPrices(input) {
  let log = {}
  for (const line of input) {
    let [town, product, price] = line.split(" | ")
    if(!log.hasOwnProperty(product)){
      log[product] = {town, price: Number(price)}
    }else{
      log[product] = (log[product].price > Number(price)) || (log[product].town === town) ? {town, price: Number(price)} : log[product]
    }
  }
  let result = []
  for (const product in log) {
    result.push(`${product} -> ${log[product].price} (${log[product].town})`)
  }
  return result.join(`\n`)
}
console.log(
  lowestPrices([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ])
);

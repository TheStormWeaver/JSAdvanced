function storeCatalouge(input) {
  let store = []
  for (const line of input) {
    let [name, price] = line.split(" : ")
    price = Number(price)
    const initial = name[0]
    if(!store.hasOwnProperty(initial)){
      store[initial] = []
    }
    store[initial].push({name, price})
    store[initial].sort((a, b) => (a.name).localeCompare(b.name))
  }
  let result = []
  let sorted = Object.entries(store).sort((a, b) => a[0].localeCompare(b[0]))
  for (const ele of sorted) {
    result.push(ele[0])
    for (const line of ele[1]) {
      result.push(` ${line.name}: ${line.price}`)
    }
    
  }
  return result.join("\n")
}
console.log(
  storeCatalouge([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ])
);

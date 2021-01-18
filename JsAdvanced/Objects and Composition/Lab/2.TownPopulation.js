function townPopulation(arr) {
  let obj = {}
  for (const line of arr) {
    let [name, pop] = line.split(" <-> ")
    pop = Number(pop)
    if(!obj.hasOwnProperty(name)){
      obj[name] = {}
      obj[name].pop = 0
    }
    obj[name].pop += pop
  }
  let result = ""
  for (const key in obj) {
    result += `${key} : ${obj[key].pop}` + `\n`
  }
  return result
}
console.log(
  townPopulation([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
  ])
);

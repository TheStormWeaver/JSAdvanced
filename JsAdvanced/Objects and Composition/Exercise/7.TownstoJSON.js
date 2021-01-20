function townToJSON(input) {
  let towns = [];
  let first = input.shift();
  for (const line of input) {
    let [Town, latitude, longitude] = line.split(" | ");
    Town = Town.split("| ")
      .filter((x) => x != "")
      .join("");
    longitude = longitude
      .split(" |")
      .filter((x) => x != "")
      .join("");
    if (!towns.hasOwnProperty(Town)) {
      towns.push({
        Town : Town,
        Latitude : Number(Number(latitude).toFixed(2)),
        Longitude : Number(Number(longitude).toFixed(2))
      })
    }
  }
  return JSON.stringify(towns)
}
console.log(
  townToJSON([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);

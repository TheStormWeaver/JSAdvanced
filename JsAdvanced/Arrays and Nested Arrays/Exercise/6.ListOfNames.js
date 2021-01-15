function nameSorting(arr) {
  let sorted = arr.sort((a, b) => a.localeCompare(b))
  let result = ""
  for (let i = 0; i < arr.length; i++) {
    result += `${i + 1}.${arr[i]}` + `\n`
  }
  return result
}
console.log(nameSorting(["John", "Bob", "Christina", "Ema"]));

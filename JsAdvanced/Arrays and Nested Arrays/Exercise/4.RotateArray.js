function addAndRemoveele(arr, num) {
  for (let i = 0; i < num; i++) {
    let current = arr.pop()
    arr.unshift(current)
  }
  return arr.join(" ")
}
console.log(addAndRemoveele(["1", "2", "3", "4"], 2));

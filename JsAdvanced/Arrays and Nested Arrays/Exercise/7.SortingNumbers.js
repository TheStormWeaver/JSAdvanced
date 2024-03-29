function numberSorting(arr) {
  let output = [];
  let inputSorted = arr.slice(0).sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      let biggest = inputSorted.shift();
      output.push(biggest);
    } else {
      let smallest = inputSorted.pop();
      output.push(smallest);
    }
  }
  return output;
}
console.log(numberSorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

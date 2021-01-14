function biggerHalf(arr) {
  let sorted = arr.sort((a, b) => a - b)
  let middle = Math.floor(sorted.length / 2)
  let result = sorted.slice(middle)
  return result
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

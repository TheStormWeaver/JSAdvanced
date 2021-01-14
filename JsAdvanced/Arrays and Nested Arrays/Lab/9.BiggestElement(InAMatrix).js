function biggestNumber(arr) {
  let biggest = Number.MIN_SAFE_INTEGER
  for (const line of arr) {
    for (const element of line) {
      if(element > biggest){
        biggest = element
      }
    }
  }
  return biggest
}
console.log(
  biggestNumber([
    [20, 50, 10],
    [8, 33, 145],
  ])
);

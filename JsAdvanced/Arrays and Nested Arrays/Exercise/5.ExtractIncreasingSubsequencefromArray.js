function extractIncreasingArr(arr) {
  let result = [];
  let biggest = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (biggest <= current) {
      biggest = current;
      result.push(biggest);
    }
  }
  return result;
}
console.log(extractIncreasingArr([1, 3, 8, 4, 10, 12, 3, 2, 24]));

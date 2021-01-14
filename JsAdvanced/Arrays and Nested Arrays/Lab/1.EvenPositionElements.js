function evenPositionEle(arr) {
  let result = ""
  for (let i = 0; i < arr.length; i+=2) {
    result += arr[i] + " "
  }
  return result.trimEnd()
}
console.log(evenPositionEle(['20', '30', '40']));

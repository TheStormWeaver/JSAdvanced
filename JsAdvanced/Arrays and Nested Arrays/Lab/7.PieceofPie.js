function pieceOfPie(arr, start, end) {
  let result = ""
  if(arr.includes(start) && arr.includes(end)){
    let firsthalf = arr.indexOf(start)
    let secondhalf = arr.indexOf(end)
    result = arr.slice(firsthalf, secondhalf + 1)
  }
  return result
}
console.log(
  pieceOfPie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);

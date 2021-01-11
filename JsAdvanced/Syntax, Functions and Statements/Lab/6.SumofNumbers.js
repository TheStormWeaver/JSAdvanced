function sumOfNum(number1 , number2) {
  num1 = Number(number1)
  num2 = Number(number2)
  let result = 0
  for (let i = num1; i <= num2; i++) {
    result += i
  }
  return result
}
console.log(sumOfNum(1, 5));

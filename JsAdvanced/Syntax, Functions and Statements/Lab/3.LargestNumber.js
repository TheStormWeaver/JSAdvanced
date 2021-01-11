function echoFunction(num1, num2, num3) {
  let result = 0
  if(num1 > num2 && num1 > num3){
    result = num1
  }else if(num2 > num1 && num2 > num3){
    result = num2
  }else if(num3 > num1 && num3 > num2){
    result = num3
  }
  return result
}
console.log(echoFunction(-3, -5, -22.5));

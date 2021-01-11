function mathOperations(num1 , num2, arg) {
  let result = 0
  if(arg == '+'){
    result = num1 + num2
  }else if(arg == '-'){
    result = num1 - num2
  }else if(arg == '*'){
    result = num1 * num2
  }else if(arg == '/'){
    result = num1 / num2
  }else if(arg == '%'){
    result = num1 % num2
  }else if(arg == '**'){
    result = num1 ** num2
  }
  console.log(result)
}
mathOperations(5, 6, '+');

function circleArea(arg) {
  let result = ""
  let type = typeof arg
  if(type = Number){
    result = (Math.pow(arg, 2) * Math.PI).toFixed(2);
  }else{
    result ='We can not calculate the circle area, because we receive a {type of argument}.'
  }
  return result
}
console.log(circleArea(5));

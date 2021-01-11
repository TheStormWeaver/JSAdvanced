function circleArea(arg) {
  let result = "";
  let type = typeof arg;
  if(type == "number"){
    result = (Math.pow(arg, 2) * Math.PI).toFixed(2);
  }else{
    result = `We can not calculate the circle area, because we receive a ${type}.`;
  }
  return result;
}
console.log(circleArea(5));

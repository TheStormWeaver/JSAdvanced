function negativeAndPositive(arr) {
  let result = []
  for (const element of arr) {
    if(element >= 0){
      result.push(element)
    }else{
      result.unshift(element)
    }
  }
  return result
}
console.log(negativeAndPositive([7, -2, 8, 9]));

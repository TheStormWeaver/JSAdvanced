function sameNumbers(num) {
  let current = num.toString().split("")
  let result = 0
  let isSame = true
  for (let i = 0; i < current.length; i++) {
    if(current[i] != current[i + 1] && current[i + 1] != undefined){
      isSame = false
    }
    result += Number(current[i])
  }
  return `${isSame} \n${result}`
}
console.log(sameNumbers(2222222));
console.log(sameNumbers(1234));

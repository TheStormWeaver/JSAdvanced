function addAndRemoveele(arr) {
  let result = [];
  let i = 0;
  for (const line of arr) {
    if (line == "add") {
      i++;
      result.push(i);
    } else if (line == "remove") {
      i++;
      result.pop();
    }
  }
  if(result.length > 0){
  return result.join(`\n`);
  }else{
    return "Empty"
  }
}
console.log(addAndRemoveele(["add", "add", "add", "add"]));
console.log(addAndRemoveele(["add", "add", "remove", "add", "add"]));

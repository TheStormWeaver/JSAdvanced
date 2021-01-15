function sortByTwoCriteria(arr) {
  let sorted = arr.sort((a, b) => {
    if(a.length > b.length || b.length > a.length){ // (a.length - b.length != 0) - alternative
      return a.length - b.length
    }else{
      return a.localeCompare(b)
    }
  })
  return sorted.join("\n")
}
console.log(sortByTwoCriteria(["alpha", "beta", "gamma"]));

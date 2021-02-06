function solve() {
  let input = document.getElementById('input').value
  let sentances = input.split(".").filter(x => x.length > 1)
  let output = document.getElementById("output")

  let result = []

  for (const line of sentances) {
    result.push(line)
    if(result.length % 3 == 0){
      p = document.createElement("p")
      p.textContent = result.join(".") + "."
      output.appendChild(p)
      result = []
    }
  }
  if(result.length < 3 && result.length >0){
    p = document.createElement("p")
    p.textContent = result.join(".") + "."
    output.appendChild(p)
    result = []
  }
}

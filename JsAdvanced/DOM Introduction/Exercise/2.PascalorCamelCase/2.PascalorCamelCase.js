function solve() {
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;
  let lowerInput = input.toLowerCase();
  let split = lowerInput.split(" ");
  if (currentCase == "Camel Case") {
    for (let i = 0; i < split.length; i++) {
      if (i == 0) {
      } else {
        let firstPart = split[i][0].toUpperCase();
        let secondPart = split[i].slice(1);
        split[i] = firstPart + secondPart;
      }
      document.getElementById("result").textContent = split.join("");
    }
  } else if (currentCase == "Pascal Case") {
    for (let i = 0; i < split.length; i++) {
      let firstPart = split[i][0].toUpperCase();
      let secondPart = split[i].slice(1);
      split[i] = firstPart + secondPart;
    }
    document.getElementById("result").textContent = split.join("");
  } else {
    document.getElementById("result").textContent = "Error!";
  }
}

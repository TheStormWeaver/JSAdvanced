function addDestination() {
  let cityInput = document.getElementsByClassName("inputData")[0];
  let countryInput = document.getElementsByClassName("inputData")[1];
  let seasons = document.getElementById("seasons");
  let tBody = document.getElementById("destinationsList");
  let summaryBox = document.getElementById("summaryBox");

  if (cityInput.value == " " || countryInput.value == " ") {
    return;
  } else {
    createElement();
  }

  function createElement() {
    let tr = document.createElement("tr");
    let tdCity = document.createElement("td");
    tdCity.textContent = [cityInput.value, countryInput.value].join(", ");
    let tdSeason = document.createElement("td");
    tdSeason.textContent = seasons.value[0].toLocaleUpperCase(0) + seasons.value.substring(1)
    tr.appendChild(tdCity);
    tr.appendChild(tdSeason);
    tBody.appendChild(tr);
    switch (seasons.value) {
      case "summer":
        document.getElementById("summer").value++
        break;
      case "winter":
        document.getElementById("winter").value++
        break;
      case "autumn":
        document.getElementById("autumn").value++
        break;
      case "spring":
        document.getElementById("spring").value++
        break;
    }
  }
}


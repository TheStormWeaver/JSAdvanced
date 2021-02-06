function toggle() {
  let button = document.querySelector(".button");
  let divExtra = document.querySelector("#extra");

  if (divExtra.style.display == "" || divExtra.style.display == "none") {
    divExtra.style.display = "block";
  } else {
    divExtra.style.display = "none";
  }

  if (button.textContent === "More") {
    button.textContent = "Less";
  } else {
    button.textContent = "More";
  }
}

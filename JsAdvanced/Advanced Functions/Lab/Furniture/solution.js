function solve() {
  document.querySelector("button").addEventListener("click", onClickGenerate);
  document.querySelectorAll("button")[1].addEventListener("click", onclickBuy);
 
 
  function onClickGenerate(event) {
    let tbody = document.querySelector(".table").querySelector("tbody");
 
    let button = event.target;
    let list = JSON.parse(document.querySelector('textarea').value);
    for (let i = 0; i < list.length; i++) {
      let tr = document.createElement("tr");
 
      let tdIMG = document.createElement("td");
      let img = document.createElement("img");
      img.setAttribute("src", list[i]["img"]);
      tdIMG.appendChild(img);
      tr.appendChild(tdIMG);
 
      let tdPName = document.createElement("td");
      let pName = document.createElement("p");
      pName.innerText = list[i]["name"];
      tdPName.appendChild(pName);
      tr.appendChild(tdPName);
 
      let tdPPrice = document.createElement("td");
      let pPrice = document.createElement("p");
      pPrice.innerText = Number(list[i]["price"]);
      tdPPrice.appendChild(pPrice);
      tr.appendChild(tdPPrice);
 
      let tdDecorationFactor = document.createElement("td");
      let pDecorationFactor = document.createElement("p");
      pDecorationFactor.innerText = Number(list[i]["decFactor"]);
      tdDecorationFactor.appendChild(pDecorationFactor);
      tr.appendChild(tdDecorationFactor);
 
      let tdCheckBox = document.createElement("td");
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      // make checkbox disabled or enabled
      tdCheckBox.appendChild(checkBox);
      tr.appendChild(tdCheckBox);
 
      tbody.appendChild(tr);
    }
 
  }
 
  function onclickBuy(event) {
 
    let output = {
      furniture: [],
      totalPrice: 0,
      decFactors: [],
      getAvgDecFactor() {
        if(this.decFactors.length == 0){
          return 0;
        }
        let avgDecFactor = 0;
        this.decFactors.forEach(a => avgDecFactor += a)
        return avgDecFactor / this.decFactors.length;
      },
      toString() {
        return `Bought furniture: ${this.furniture.join(", ")}\nTotal price: ${this.totalPrice.toFixed(2)}\nAverage decoration factor: ${this.getAvgDecFactor()}`;
      }
    }
 
    let checkboxes = Array.from(document.querySelector(".table").querySelectorAll("input"));
 
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        let rows = checkboxes[i].parentElement.parentElement.querySelectorAll("td");
 
          output.furniture.push(rows[1].textContent);
          output.totalPrice += Number(rows[2].textContent);
          output.decFactors.push(Number(rows[3].textContent));
      
      }
    }
 
    document.querySelectorAll("textarea")[1].value = output.toString();
  }
}
 

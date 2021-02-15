function solve() {
  let parentDiv = document.getElementsByClassName("wrapper")[0];
  let openSection = parentDiv.children[1];
  let openDiv = openSection.children[1];
  let progressSection = parentDiv.children[2];
  let completeSection = parentDiv.children[3];
  let task = document.getElementById("task");
  let description = document.getElementById("description");
  let date = document.getElementById("date");
  let add = document.getElementById("add");
  parentDiv.addEventListener("click", onClick);

  function onClick(ev) {
    if (ev.target === add) {
      ev.preventDefault();
      if (task.value === "" || description.value === "" || date.value === "") {
        return;
      } else {
        createArticle();
      }
    }else if(ev.target.parentNode.parentNode.parentNode.parentNode === openSection){
      const article = ev.target.parentNode.parentNode
      if(ev.target.textContent === "Start"){
        moveTaskToProgress(article)
      }else if(ev.target.textContent === "Delete"){
        article.remove()
      }

    }else if(ev.target.parentNode.parentNode.parentNode.parentNode === progressSection){
      const article = ev.target.parentNode.parentNode
      if(ev.target.textContent === "Delete"){
        article.remove()
      }else if(ev.target.textContent === "Finish"){
        const completeArticale = article.cloneNode(true)
        article.remove()
        completeArticale.querySelector(".flex").remove()
        completeSection.children[1].appendChild(completeArticale)
      }
    }
  }
  function createArticle() {
    const h3 = document.createElement("h3");
    h3.textContent = task.value;

    const p1 = document.createElement("p");
    p1.textContent = `Description: ${description.value}`;

    const p2 = document.createElement("p");
    p2.textContent = `Due Date: ${date.value}`;

    const startBtn = document.createElement("button");
    startBtn.textContent = "Start";
    startBtn.classList.add("green");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("red");

    const div = createElement('div', startBtn, deleteBtn)
    div.classList.add("flex")
    
    const article = createElement('article', h3, p1, p2, div)
    openDiv.appendChild(article)
  }
  function moveTaskToProgress(article){
    const copyedArticle = article.cloneNode(true)
    article.remove()

    copyedArticle.querySelectorAll('button')[0].textContent = "Delete"
    copyedArticle.querySelectorAll('button')[0].classList.remove("green")
    copyedArticle.querySelectorAll('button')[0].classList.add("red")

    copyedArticle.querySelectorAll('button')[1].textContent = "Finish"
    copyedArticle.querySelectorAll('button')[1].classList.remove("red") 
    copyedArticle.querySelectorAll('button')[1].classList.add("orange")

    progressSection.children[1].appendChild(copyedArticle)
  }
  function createElement(type, ...content) {
    const result = document.createElement(type);
    content.forEach((e) => {
      if (typeof e == "string") {
        const node = document.createTextNode(e);
        result.appendChild(node);
      } else {
        result.appendChild(e);
      }
    });
    return result;
  }
}

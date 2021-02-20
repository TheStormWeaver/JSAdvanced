function solve(){
  let authInput = document.getElementById("creator")
  let titleInput = document.getElementById("title")
  let categoryInput = document.getElementById("category")
  let contentInput = document.getElementById("content")
  let createBtn = document.getElementsByClassName("btn create")[0]
  let artSection = document.getElementsByTagName("main")[0].children[0]
  let archiveOl = document.getElementsByClassName("archive-section")[0].children[1]
  let parentDiv = document.getElementsByClassName("site-content")[0]

  parentDiv.addEventListener('click', (ev) => {
   if(ev.target.tagName === "BUTTON"){
      if(ev.target == createBtn){
         createArticle(ev)
      }else if(ev.target.textContent == "Archive"){
         const article = ev.target.parentNode.parentNode
         moveToArchive(article)
      }else if(ev.target.textContent == "Delete"){
         const article = ev.target.parentNode.parentNode
         article.remove()
      }
   }
  })

  function createArticle(ev) {
     ev.preventDefault()
     let h1 = createElement("h1", titleInput.value)
     let catP = document.createElement("p")
     catP.innerHTML = `Category: <strong>${categoryInput.value}</strong>`
     let creatorP = document.createElement("p")
     creatorP.innerHTML = `Creator: <strong>${authInput.value}</strong>`
     let contentP = createElement("p", contentInput.value)

     let divBtn = createElement("div")
     divBtn.classList.add("buttons")
     let delBtn = createElement("button", "Delete")
     delBtn.classList.add("btn", "delete")
     let archiveBtn = createElement("button", "Archive")
     archiveBtn.classList.add("btn", "archive")
     divBtn.appendChild(delBtn)
     divBtn.appendChild(archiveBtn)
     let article = createElement("article", h1, catP, creatorP, contentP, divBtn)
     artSection.appendChild(article)
  }

  function moveToArchive(article) {
   const copyedArticle = article.cloneNode(true)
   article.remove()

   let li = createElement("li", copyedArticle.querySelector("h1").textContent)
   archiveOl.appendChild(li)
   sort()
  }

  function sort() {
   let arr = Array.from(archiveOl.children)
   arr.sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
   for (const line of arr) {
     archiveOl.appendChild(line)
    }
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

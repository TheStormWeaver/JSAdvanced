function solution() {
  let parentDiv = document.querySelector(".container");
  let ListSection = parentDiv.children[1];
  let SentSection = parentDiv.children[2];
  let discardedSection = parentDiv.children[3];
  let input = document.querySelector("input");
  let addGift = document.querySelector("button");
  let listUl = ListSection.children[1];
  let sentUl = SentSection.children[1];
  let discardedUl = discardedSection.children[1];

  parentDiv.addEventListener("click", onClick);

  function onClick(ev) {
    if (ev.target === addGift) {
      createLi();
      clearInput();
    } else if (ev.target.parentNode.parentNode.parentNode === ListSection) {
      let li = ev.target.parentNode;
      if (ev.target.textContent === "Send") {
        moveToSent(li);
      } else if (ev.target.textContent === "Discard") {
        moveToDiscarded(li);
      }
    }
  }
  function createLi() {
    let li = createElement("li", input.value);
    li.classList.add("gift");
    let sendBtn = createElement("button", `Send`);
    sendBtn.id = "sendButton";
    let discardBtn = createElement("button", `Discard`);
    discardBtn.id = "discardButton";
    li.appendChild(sendBtn);
    li.appendChild(discardBtn);
    listUl.appendChild(li);
    sort()
  }
  function moveToSent(li) {
    let liCopy = li.cloneNode(true);
    li.remove();

    let sendBtn = liCopy.children[0];
    let discardBtn = liCopy.children[1];
    sendBtn.remove();
    discardBtn.remove();

    sentUl.appendChild(liCopy);
  }
  function moveToDiscarded(li) {
    let liCopy = li.cloneNode(true);
    li.remove();

    let sendBtn = liCopy.children[0];
    let discardBtn = liCopy.children[1];
    sendBtn.remove();
    discardBtn.remove();

    discardedUl.appendChild(liCopy);
  }
  function sort() {
    let arr = Array.from(listUl.children);
    arr.sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent));
    for (const line of arr) {
      listUl.appendChild(line)
    }
  }
  function clearInput() {
    input.value = "";
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

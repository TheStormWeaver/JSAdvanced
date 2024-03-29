function addItem() {
  const input = document.getElementById('newText');
  const liElement = createElement('li', input.value);
  liElement.textContent = document.getElementById("newText").value;

  const deleteBtn = createElement('a', '[Delete]')
  deleteBtn.href = '#'
  deleteBtn.addEventListener('click', (ev) => {
     ev.target.parentNode.remove()
  })
  liElement.appendChild(deleteBtn)

  document.getElementById("items").appendChild(liElement);
  input.value = "";

  function createElement(type, content) {
    const element = document.createElement(type);
    element.textContent = content;
    return element;
  }
}


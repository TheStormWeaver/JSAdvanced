function addItem() {
   let text = document.getElementById('newItemText').value
   let liElement = document.createElement('li')
   liElement.textContent = text
   let ulElement = document.getElementById('items')
   ulElement.appendChild(liElement)
}

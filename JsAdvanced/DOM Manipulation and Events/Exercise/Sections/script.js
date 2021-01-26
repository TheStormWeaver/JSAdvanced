function create(words) {
   const content = document.getElementById('content')

   for (let i = 0; i < words.length; i++) {
      const div = document.createElement('div')
      const p = document.createElement('p')
      p.textContent = words[i]
      p.style.display = 'none'
      div.appendChild(p) 
      div.addEventListener("click", function (e){
         const p = e.target.children[0] || e.target
         const isVisible = p.style.display == "block"
         p.style.display = isVisible ? 'none' : 'block'
      })
      content.appendChild(div)
   }
}

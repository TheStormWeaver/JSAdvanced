function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const  rows = document.querySelectorAll('tbody tr')
   
   function onClick() {
      const input = document.querySelector('#searchField').value.toLowerCase()
      for (const row of rows) {
         console.log(input)
      if(row.textContent.toLowerCase().includes(input) && input != ""){
            row.setAttribute('class', 'select')
         }else{
            row.removeAttribute('class')
         }
      }
   }
}

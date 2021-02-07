function deleteByEmail() {
    let email = document.querySelector('input[name="email"]').value
    let rows = Array.from(document.querySelectorAll('tbody tr'))
    let result = document.getElementById('result')
    let deleted = false
    for (const row of rows) {
        if(row.children[1].textContent == email){
            row.parentNode.removeChild(row)
            deleted = true
            result.textContent = 'Deleted.'
        }
    }
    if(deleted == false){
        result.textContent = 'Not found.'
    }
}

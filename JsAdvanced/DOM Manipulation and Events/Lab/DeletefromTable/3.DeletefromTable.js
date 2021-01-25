function deleteByEmail() {
    let email = document.querySelector('input[name="email"]').value
    let rows = Array.from(document.querySelectorAll('tbody tr'))
    let deleted = false
    for (const row of rows) {
        if(row.children[1].textContent == email){
            row.parentNode.removeChild(row)
            deleted = true
            document.getElementById('result').textContent = 'Deleted.'
        }
    }
    if(deleted == false){
        document.getElementById('result').textContent = 'Not found.'
    }
}

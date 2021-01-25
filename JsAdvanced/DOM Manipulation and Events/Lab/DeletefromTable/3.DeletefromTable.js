function deleteByEmail() {
    let email = document.querySelector('input[name="email"]').value
    let rows = Array.from(document.querySelectorAll('tbody tr'))
    let resultElement = document.getElementById('result').textContent
    let deleted = false
    for (const row of rows) {
        if(row.children[1].textContent == email){
            row.parentNode.removeChild(row)
            deleted = true
            resultElement = 'Deleted.'
        }
    }
    if(deleted == false){
        resultElement = 'Not found.'
    }
}

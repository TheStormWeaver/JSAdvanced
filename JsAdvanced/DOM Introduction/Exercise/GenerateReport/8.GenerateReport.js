function generateReport(colNames) {
    let checkedElements = {}
    let result = []
    Array.from(document.querySelectorAll("input")).map((x, index) => {
        if(x.checked){
            let name = x.parentElement.textContent.toLowerCase().trim()
            checkedElements[name] = index
        }
    })
    let collums = [...document.querySelectorAll('tr')].slice(1).map(row => {
        let current = {}
        let rows = [...row.querySelectorAll('td')].map((x,i) => {
            Object.keys(checkedElements).map(element => {
                if(i == checkedElements[element]){
                    current[element] = x.textContent
                }
            })
        })
        result.push(current)
    })
    document.getElementById("output").value = JSON.stringify(result, null, 2)
}

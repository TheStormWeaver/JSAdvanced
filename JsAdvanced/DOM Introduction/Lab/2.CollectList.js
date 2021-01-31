function extractText() {
        const liElements = Array.from(document.getElementsByTagName('li'))
        const elementText = liElements.map(e => e.textContent)

        document.getElementById('result').value = elementText.join('\n')
    }

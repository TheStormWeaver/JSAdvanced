function solve() {
    let formControls = document.querySelectorAll(".form-control input")
    const lecture = formControls[0]
    const date = formControls[1]
    const moduleName = document.querySelector('select')
    const addBtn = document.querySelector('button')
    const modulesOutput = document.querySelector('.modules')
    let state = {}
    
    document.getElementsByTagName('main')[0].addEventListener('click', (ev) => {
        if(ev.target.tagName === "BUTTON"){
            if(ev.target == addBtn){
                add(ev)
                Object.entries(state).forEach(([name, module]) => {
                    modulesOutput.appendChild(module.div)
                })
            }else{
                del(ev)
            }
        }
    })

    function add(ev){
        ev.preventDefault()
        if(lecture.value == "" || date.value == "" || moduleName.value == "Select module"){
            return
        }
        let lectureName = lecture.value
        const dateString =  date.value
        const lectureTitle = lectureName + " - " + dateString.split("-").join("/").split("T").join(" - ")

        let h4 = createElement('h4', lectureTitle)
        let li = createElement('li')
        li.classList.add("flex")
        let delBtn = createElement('button', "Del")
        delBtn.classList.add("red")
        li.appendChild(h4)
        li.appendChild(delBtn)

        let div
        let ul
        if(!state[moduleName.value]){
            let h3 = createElement('h3', `${moduleName.value.toUpperCase()}-MODULE`)
            ul = createElement('ul')
            lis = []
            div = createElement('div')
            div.classList.add('module')

            div.appendChild(h3)
            div.appendChild(ul)
            state[moduleName.value] = {div, ul, lis: []}
        }else{
            div = state[moduleName.value].div
            ul = state[moduleName.value].ul
        }
        state[moduleName.value].lis.push({li, date: date.value})

        state[moduleName.value].lis.sort((a, b) => a.date.localeCompare(b.date)).forEach(({li}) => {
        ul.appendChild(li)
        })
    }

    function del(ev){
        let li = ev.target.parentNode
        let ul = li.parentNode
        let div = ul.parentNode

        li.remove()

        if(ul.children.length === 0){
            div.remove()
        }
    }

    function createElement(type, text){
        let element = document.createElement(type)
        if(text){
            element.textContent = text
        }
        return element
    }
};

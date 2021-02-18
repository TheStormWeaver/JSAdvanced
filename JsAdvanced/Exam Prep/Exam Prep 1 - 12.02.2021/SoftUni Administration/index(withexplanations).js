function solve() {
    let formControls = document.querySelectorAll('.form-control input')
    const lecture = formControls[0]
    const date = formControls[1]
    const moduleName = document.querySelector('select')
    const modulesOutput = document.querySelector('.modules')
    let state = {}

    function createElement(type, text, attributes = []){
        let element = document.createElement(type)
        if(text){
            element.textContent = text
        }
        attributes
        .map(attr => attr.split("="))
        .forEach(([name, value]) => {  
            element.setAttribute(name, value)
        })
        return element
    }


    function add(e){
        //validation 
        e.preventDefault()
        if(lecture.value == "" || date.value == "" || moduleName.value == "Select module"){
            return
        }
        //li creation
        let lectureName = lecture.value
        const dateString =  date.value
        const lectureTitle = lectureName + " - " + dateString.split("-").join("/").split("T").join(" - ")

        let delButton = createElement('button', 'Del', ['class=red'])
        const lectureH4 = createElement('h4', lectureTitle)
        const li = createElement('li', undefined, ['class=flex'])
        li.appendChild(lectureH4)
        li.appendChild(delButton)

        //module creation
        let module
        let ul
        //if creating for the first time (the module)
        if(!state[moduleName.value]){
            let h3 = createElement('h3', `${moduleName.value.toUpperCase()}-MODULE`)
            ul = createElement('ul')
            lis = []
            module = createElement('div', undefined, ['class=module'])

            module.appendChild(h3)
            module.appendChild(ul)

            state[moduleName.value] = {module, ul, lis: []}

        }else{ //if module already exists
            module = state[moduleName.value].module
            ul = state[moduleName.value].ul
        }

        //pushing the List Items in the module
        state[moduleName.value].lis.push({li, date: date.value})

        //sorting the List Items and appending to the Unordered List
        state[moduleName.value].lis.sort((a, b) => a.date.localeCompare(b.date)).forEach(({li}) => {
            ul.appendChild(li)
        })

       // modulesOutput.appendChild(module)

    }

 //deleting
 function del(e){
    let li = e.target.parentNode
    let ul = li.parentNode
    let module = ul.parentNode

    //deleting the List Item
    li.remove()

    //if the Unordered List is empty we delete the whole module
    if(ul.children.length == 0){
        module.remove()
    }
 }
    //attaching event listener to the main
    document.getElementsByTagName('main')[0].addEventListener('click', (e) => {
        //if the target is a button 
        if(e.target.tagName === "BUTTON"){
            //if it does not contain class red we add it to it 
            if(!e.target.classList.contains('red')){
                add(e)
                
                Object.entries(state).forEach(([name, module]) => {
                    modulesOutput.appendChild(module.module)
                })
            }else{ //otherwise we delete
                del(e)
            }
        }
    })
};

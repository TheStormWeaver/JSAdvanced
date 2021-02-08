//Person is a examplary class
function newOperator(constructor, ...params){
    //function used to replace the "new" operator in classes
    const result = {}
    Object.setPrototypeOf(result, Person.prototype)
    constructor.apply(result, params)
    return result
}

//V2
function newOperator(constructor, ...params){
    //function used to replace the "new" operator in classes
    const result = Object.create(Person.prototype)
    constructor.apply(result, params)
    return result
}

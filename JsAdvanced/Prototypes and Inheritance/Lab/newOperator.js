/*
function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName

    Object.defineProperty(this, "fullName", {
        enumerable: true,
        get: function(){
            return  `${this.firstName} ${this.lastName}`
        },
        set: function(value){
            const tokens = value.split(" ")
            this.firstName = tokens[0]
            this.lastName = tokens[1]
        }
    })
}
const myPerson = new Person("May", "Sure")
console.log(myPerson)
*/
 //function used to replace the "new" operator in classes
function newOperator(constructor, ...params){
    const result = {}
    Object.setPrototypeOf(result, Person.prototype)
    constructor.apply(result, params)
    return result
}

//V2
function newOperator(constructor, ...params){
   
    const result = Object.create(Person.prototype)
    constructor.apply(result, params)
    return result
}

/* Without Prototype (V3)
function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

const myProto = {
    write(message){
        console.log(`${this.firstName} wrote: ${message}`)
    }
}
const myPerson = new Person("May", "Sure")
console.log(myPerson)
*/
function newOperator(constructor, ...params){
    //function used to replace the "new" operator in classes
    const result = Object.create(myProto)
    constructor.apply(result, params)
    return result
}



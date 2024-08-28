// are used to overcome the repetition of work

function thing() {
    let sum = 1 + 2
    console.log(sum)
}

function add(thing) {
   let sum = thing + 1
    return add
}
thing()
add(1)

// js has inbuilt functions too browser has alert, prompt


let product = 100
function multiply(a){
    product = product * a // local variable only supported inside function, cannot be accessed outside
    console.log(product)
    return product
}

// multiply(2) // this won't work
// let b = product + a
// console.log(b)

let grade = null
function study(hasStudied){
    if(hasStudied === true){
        return true
    }
}

let finalValue = study(true)
console.log(finalValue)

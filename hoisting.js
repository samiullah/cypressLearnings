console.log(a)
var a = 7
// this will return undefined

sayHello()
//this will work as normal
function sayHello() {
    console.log("Hello World")
}

// if a var is pprinted before initialised, it will be undefined by default

// a function call made, before the function code will work as normal
// this will not work in java, and other languages
sayHello()

// errors directly run on the call stack, any errors are thrown instantly

// arrow function act as a variable - special case - var will show as undefined

// console.log(b)
// //this will error
// let b = 1

// hello()
// this will throw hello is not defined, special case
hello =()  => {
    return "Hello World Arrow"
}
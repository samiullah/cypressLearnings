class Animal {

    makeSound() {
        console.log("some noise")
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("woof")
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("meow")
    }
}
function printAnimalSound() {
    let newAnimal = new Animal()
    newAnimal.makeSound()
}

let catSound = new Cat
let dogSound = new Dog

dogSound.makeSound()
catSound.makeSound()

printAnimalSound()

//common JS
module.exports = Cat

// Method Overriding same method name but different body 

export class Animal {
    eats() {
        console.log("Animal eats")
    }

    sleeps() {
        console.log("animal sleeps")
    }
}

class fox extends Animal {


    eats() {
        console.log("fox eats")
        super.eats()
    }
sleeps() {
    console.log("fox sleeps")
}


}

let newfox = new fox()

newfox.eats()

//Polymorphism
// we have same function name but the function body is different
// if there is no method in child class - parent function is used
// create an objectInstance of parent class - parent method is called
// create an objectInstance of child class - child method is called, if there is one, if not parent method will be called

//super has knowledge of all from parent class

//Method overriding


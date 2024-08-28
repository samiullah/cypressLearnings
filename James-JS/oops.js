// let car  ={
//     model: "hyundai",
//     build: 2012,
//     engine: 1800,
//     stop: ()=> {
//         console.log("Stop the car")
//     }
// }
//
// let stop = car.stop()
// console.log(stop)

// this keyword in js

// class is essentially a blueprint of creating objects

// for defining vars we use camelCasing we use PascalCase for classes

class CarFactory {

    // we need to use a constructor to create objects in a class

    constructor(model, color, build) {

        this.model = model
        this.color = color
        this.build = build

    }

    makeCar() {
        console.log("car is model " + this.model)
        console.log("car is the colour " + this.color)
        console.log("car was built " + this.build)
    }

stop () {
    console.log("Stop")
    }
}

let newCar = new CarFactory("Toyota","Red",2000)

newCar.stop()

console.log(newCar.makeCar())

// creates a new object
// let objectName = new className()


// Inheritcance

// baseClass or parentClass

// childClass or derivedClass
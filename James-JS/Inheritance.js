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
        console.log("car was built in " + this.build)
    }

    stop () {
        console.log("Stop")
    }
}

class MercedesFactory extends CarFactory {

    controlClimate() {
        let climateControl = "AC Started"
        console.log(climateControl)
    }

}


let benz = new MercedesFactory("A class", "Black", 2023)

console.log(benz.makeCar())
benz.controlClimate()
// hiding the data and methods together

// mechanism of restricting direct access to some of the object's components
// object.freeze()?
// hides implementation details
// code security

class Student {

    //name, age, id

    //setter

    setStudentDetails(name, age, id) {
        this.name = name
        this.age = age
        this.id = id

        console.log("student name is "+ this.name)
    }

    getStudentDetails(){
        return this.name

    }

    getStudentAge(){
        return this.age
    }

    getStudentId(){
        return this.id
    }


}

let tom = new Student()

tom.setStudentDetails("tom",15,1234)

console.log(tom)

// hide data and implementation details from outside world



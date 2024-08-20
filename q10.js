// write a program to find the names of students whose age is greater than 22

let student1 = [
    {
        name: "jane",
        age: 21
    },
    {
        name: "james",
        age: 22
    },
    {
        name: "charles",
        age: 23
    },
    {
        name: "manasa",
        age: 24
    }
]
for (const studentNames of student1){
    if(studentNames.age > 22){
        console.log(studentNames.name)
    }
}

// const a = {one: 1};
// Object.freeze(a);
// a.three = 3; // this is ok.
// a = {two: 2}; // this doesn't work.
// a.four = 4; // this works

// only the variable assignment is constant: 27 any objects or arrays referenced stay mutable

/*
what objects cannot do: mutability refers to data types that can be accessed and changed after they're created in memory
changing an object does not change the initial value
object assign target, source
target receives new properties
source is where the properties come from

 */

// can use freeze method so line 28 doesn't work
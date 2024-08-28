// Objects are: collection of properties and methods

let phone = {
    storage: "12gb",
    sim: "vodafone",
    manufacturer: "Samsung",
    operatingSystem: "JellyBean",
    isJailbroken: null

}

// storage is key
// 12gb is value - key and value pairs

// first way is by using . operator
// console.log(phone.sim)
console.log(phone.sim)

// second way by using []

console.log(phone["manufacturer"])


phone.model = 123
console.log(phone.model)

let newIphone = phone.model = 'iPhone'
console.log(newIphone);

const brand = 'apple'
const deviceId = 31231376113091231369

const iPhones = {
    brand,
    deviceId,
    101: true
}

console.log(iPhones)

// if key is a number we cannot access it using . operator

console.log(iPhones[101]);

// why are two simiilar objects are not equal -
// allocated into computer memory in a different place so they are accessed from different locations at compile / runtime
// even if they have the same properties they are reserved sepeartely in memory so are not equal / the same
// if we query an object key and value with another object that has the same keys and value it will be equal

let student1 = [{
    name: 'jane',
    age: 21
},
{
    name: 'james',
    age: 21

}]

for (const student of student1){
    if(student.name === 'jane'){
        console.log(student.age)

    }

}
// iterating over an object have to remember this

// write a program to find the names of students whose age is greater than 22
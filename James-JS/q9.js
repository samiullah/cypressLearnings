let arr = ["manasa", "charles", "durgesh"]

console.log(arr.reverse())
//
// //sorting can be in descending order
//
// let array = [2,1,3,4,1]
//
// let sorted = array.sort((a,b)=> b - a)
// console.log(sorted)

let arr1 = ['man', 'woman', 'baby', 'kid']


let ascending = arr1.sort((a, b) => a.length - b.length);
    console.log(ascending);

let descending = arr1.sort((a, b) => b.length - a.length);
    console.log(descending)



//console.log(JSON.stringify(arr1, null, '\t'));


// sort this array based on length of string for each element
// sort this array based on length descending order and ascending order

// let arr1 = [1,2,3]
// //let arr2 = [4,5,6]
//
// let concat = arr1.concat(arr2)
// console.log(concat)

// let arr3 = [...arr1,...arr2]
// console.log(arr3)
//
// let arr2 = [1,2,3,[4,5,6],[3,2,1]]
// console.log(arr2[3][1])

//write a 3 x 3 array grid

let gridMatrix = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22'],
];
console.log(gridMatrix[2][1])
console.log(gridMatrix.flat(3))

// read the difference between map and for each

// map returns a new array with the results of a function applied to each element
// forEach does not modify the original array, and it doesn't return anything it executes a function for each item of the array


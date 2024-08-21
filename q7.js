//write a program in JS to remove elements that are divisible by 2 from an array
//print final array value

// let arr = [1,2,3,4,5,6]

// need to remove index 1, 3, 5

// shift
// unshift

//console.log(arr.unshift(0));
//insert element to start of array and prints the new length of array - 7 not position or value ie 6 or 6!


//shift removes the first element from the array and returns it

// console.log(arr.shift());

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//         console.log(arr[i]);
//     }
// }
//

// let arr = [1,2,3,4,5,6]
// let oddArray = []
//
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 1 ) {
//         oddArray.push(arr[i])
//     }
// }
// console.log(oddArray)

let arr = [1, 2, 3, 4, 5, 6];

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) { // remainder of 0
        arr.splice(i, 1); // Remove the even number at index i

    }
}

console.log(arr);

let array = [1, 2, 3, 4, 5, 6];

array.forEach(
    (multiples)=>{
        if(multiples % !2 === 0) {
            console.log(multiples)
        }
    }
)




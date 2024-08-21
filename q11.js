let arr =[23,67,1,6,97,21,7]
// maxDifference
// can sort the array, need to find difference programmatically

arr.sort(function(a,b){return b - a});
console.log(arr)

let highest = arr[0]
let lowest = arr[6]

let difference = highest - lowest

console.log("the difference between the highest and lowest items is " +difference)

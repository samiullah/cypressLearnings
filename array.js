let programLangs = ["js", "java", "python", "keyboard"]

//remove last item as it is not a language
programLangs.pop()

console.log(programLangs);

programLangs.push('C++')

console.log(programLangs)

//assign var to the popped object in array
let value = programLangs.pop()

//print the popped value - c++
console.log(value)
console.log(programLangs);

// in typescript if you declare a string type of array, you can't push numbers to it
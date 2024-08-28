let a = 100
let b = 20

// try {
//     console.log (a/b)
//     console.log(c)
// } catch(error) {
//     console.log('error founddddd' + error)
// }
//
// finally {
//     console.log(a + b)
// }

try {
    let ans = a/b
 if (isNaN(ans)) {
        throw new Error("don't use char as denominator")
    }
} catch (error){
    console.log(error)
}




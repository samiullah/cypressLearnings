// let arr = [1,2,3,4,5]
// for(let i=0; i<5;i++) {
//
//
//     if(arr[i]===2) {
//         console.log(arr[i])
//         break;
//         console.log("code after break") //unreachable code
//     }
//     console.log('hello')
//
//
// }
//
//

// design a traffic control system
// green == go
// light red == stop
// light amber == prepare to stop


// let light = "green"
// let message = ''

// if(light == 'green') {
//     console.log('go')
// } else if (light == 'amber') {
//     console.log('prepare to stop')
// } else if (light == 'red') {
//     console.log('stop')
// } else {
//     console.log('invalid colour')
// }
//
// switch (light) {
//     case "green":
//         message = 'go'
//         break;
//     case 'red':
//         message = 'stop'
//         break;
//     case 'amber':
//         message = 'prepare'
//         break;
//     default: message = 'invalid colour'
// }
//
// console.log(message)

// switch is a conditional statement
// multiple conditions if else or, switch

let accountBalance = 999
let message = ""


switch (accountBalance) {
    case accountBalance=999:
        message = "Please recharge"
        break;
    case accountBalance=1000:
        message = "No need to recharge"
        break;
    case accountBalance=0:
        message = "Ur account is blocked"
        break;
    default:
         message = "U r not registered"

}

function variedBalance () {
    if (accountBalance !== 0 && accountBalance < 1000 ) {
        message = "top up balance"
        console.log(message)
    }
}
// you cannot use < or > operands for switch, the case will never be met and default will always be executed (or nothing if default is not set)
// switch must use = operator only

console.log(message)
variedBalance()
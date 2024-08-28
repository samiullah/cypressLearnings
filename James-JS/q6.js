let price1 = "GBP123.45"
let price2 = "GBP123.45"
let price3 = "GBP123.45"

let prices = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

let sp1 = price1.split('GBP')[1]
console.log(sp1)

// find the sum of all prices
// what will happen if negative value is given in slice method

let sum = 0

for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}

let converted = sum.toString()

console.log(sum)
console.log(converted)


console.log(sp1.slice(-1));
// counts from the end of the string forward -1 = 5 at end
// 0 / -0 print the full string

console.log(prices.slice())

/*
filter
map
find
for each




 */
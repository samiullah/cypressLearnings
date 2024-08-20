let jeansPrice = 100
let discount = 10
let discountPrice = jeansPrice - discount
let finalPrice = discountPrice / jeansPrice * 100

if (jeansPrice > 100) {
    console.log(`discount applied! the price is ${finalPrice}`);
} else {
    console.log (`no discount applied, the price is ${jeansPrice}`);
}
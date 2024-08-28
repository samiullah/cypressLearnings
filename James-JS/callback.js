// function getData(callback) {
//     setTimeout(()=> {
//         const data = {message: "Hello There!"}
//         callback(data);
//     }, 1000);
//
// }
// getData((data) => {
//     console.log(data.message)
// });

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {message: "Hello World!"};
            resolve(data);
        }, 1000);
    });
}
getData()
    .then((data) => {
        console.log(data.message);
    })
    .catch((error) => {
        console.error(error);
    });

/*
The getData method in this code produces a promise that,
after a second, resolves with the data. The fulfilled promise is handled by the then function,
 and any problems are dealt with by the catch method.
 */
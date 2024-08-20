function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Hello World!" };
            resolve(data);
        }, 1000);
    });
}
async function fetchData() {
    const data = await getData();
    console.log(data.message);

}

fetchData().catch((error) => {
    console.error(error);
});
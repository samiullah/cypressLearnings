let add = (a,b) => {
    console.log(add())
    return add(a+b)
}

let arr = [1,2,3,4,5,6]
arr.forEach(
    (element)=>{
        if(element>3) {
            console.log(element)
        }
    }
)
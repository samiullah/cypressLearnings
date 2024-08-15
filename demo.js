
const fs = require('fs');

// Read the JSON file
fs.readFile('demo.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
        jsonData[0].filter((names)=>{
            if(names.name=='ram'){
                console.log(names)
            }
        })
    
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
});


// import {fs} from "fs"
// const fs = require('fs')

// let data = fs.readFile('demo.json',(err,data)=>{

//     if (err) throw err;
//     console.log(data);

// })

// console.log(data)

// data[0].filter((student)=>{
//     if(student.name=="ram"){
//         return student
//     }
// })


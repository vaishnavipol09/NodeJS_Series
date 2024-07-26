const fs = require('fs')

const bioData = {
    name : "Vaishnavi",
    age : 25,
    series : "NodeJS"
}

console.log(bioData);


const jsonData = JSON.stringify(bioData);
console.log(jsonData);


const objJSON = JSON.parse(jsonData);
console.log(objJSON);


// add file
fs.writeFile("json1.json" , jsonData, (err)=>{
    console.log("File created successfully");
})



// read file
fs.readFile("json1.json" , "utf-8" , (err,data)=>{
    console.log(data, "read successfully");
})


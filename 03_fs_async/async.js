const fs = require("fs");



//sync form
//const data = fs.readFileSync("read.txt", "utf8")
//console.log(data);
//console.log("finally data updated");



//async form
fs.readFileSync("read.txt", "utf8" , (err, data) => {
    console.log(data); 
})
console.log("finally data updated!!")
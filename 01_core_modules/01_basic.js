const fs = require("fs");

// create file
//fs.writeFileSync("./01_core_modules/read.txt" , "Welcome nodejs series")



//append file
//fs.appendFileSync("./01_core_modules/read.txt", " add some text in txt file")




//read file
const bufferData = fs.readFileSync("./01_core_modules/read.txt")

data = bufferData.toString()
console.log(data);



//rename the file
fs.renameSync("./01_core_modules/read.txt", "./01_core_modules/readWrite.txt")
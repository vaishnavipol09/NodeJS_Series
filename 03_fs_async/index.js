const fs = require("fs");

//fs.writeFile("read.txt" , "Today's awesome day" , (err) =>{
//    console.log("file is created");
//})


//append file
//fs.appendFile("read.txt", " start learning nodejs" , (err) =>{
//    console.log("add some text on txt file");
//})



//read file
fs.readFile("read.txt" ,"UTF-8" , (err, data) =>{
    console.log(data);
})
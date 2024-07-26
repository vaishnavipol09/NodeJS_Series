const fs = require("fs");

// Create file
//fs.writeFile("bio.txt" , "challenge on", (err) =>{
//    console.log("File created successfully");
//})



// Append file
//fs.appendFile("bio.txt", " challenge successfully done", (err) =>{
//    console.log("Done");
//})



//read file
fs.readFile("bio.txt" ,"UTF-8" , (err, data) =>{
    console.log(data);
})



//
fs.rename("bio.txt", "myBio.txt", (err) =>{
    console.log("File renamed successfully");
})




//delete the file
fs.unlike("myBio.txt" , (err) =>{
    log("File deleted successfully");
})



//delete the folder
fs.rmdirSync("04_challenge_async" , (err) =>{
    console.log("Folder deleted successfully");
})



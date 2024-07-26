const fs = require("fs");

//Create file
//fs.writeFileSync("./02_challenge/bio.txt" , "in challenge we add txt file")



// append file
//fs.appendFileSync("./02_challenge/bio.txt", " and we are win because our challenge is finally successfully executed")



//read file
//const bufferData = fs.readFileSync("./02_challenge/bio.txt")
//data = bufferData.toString()
//console.log(data);



//rename file
//fs.renameSync("./02_challenge/bio.txt", "./02_challenge/myBio.txt")



//delete file and folder
//delete file then,
fs.unlike("./02_challenge/myBio.txt")

//create folder
fs.mkdirSync("challenge")

//delete folder
fs.rmdirSync("challenge")


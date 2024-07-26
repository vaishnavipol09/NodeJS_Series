const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
//    var fs  = require("fs");
//    fs.readFile("input.txt",  (err, data) => {
//        if (err) return console.error(err);
//        res.end(data.toString());
//    })


//rsstream.on("data", (chunkdata)=>{
//    res.write(chunkdata);
//})
//    rsstream.on("end",()=>{
//        res.end();
//    })

 //   rsstream.on("error", (err)=>{
 //       console.log(err);
 //       res.end("page not found");
 //   })
 


 const rsstream = fs.createReadStream("input.txt");
 rsstream.pipe(res);
})

server.listen(8000, "127.0.0.1");
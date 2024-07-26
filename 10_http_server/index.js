// the http.createServer() method includes request and response parameters which is supplied by nodejs

// the request object can be used to get information about the current http request e.g url, request header, data

// the response object can be used to send response for current http request 

// if the response from the http server is supposed to the displayed as html, you should include an http header with the correct content type



const http =  require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    //console.log(req.url);
    if(req.url == "/"){
        res.end("Hello server in home page")
    }
    else if(req.url == "/about"){
        res.end("Hello server in about page")
    }
    else if(req.url == "/contact"){
        res.end("Hello server in contact page")
    }
    else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/API/userAPI.json`, "utf-8" , (err, data)=>{
            console.log(data);
            res.end(data)
        })
    }
    else{
        res.writeHead(404, {"content-type" : "text/html"})
        res.end("<h1>page not found</h1>")
    }
});

server.listen(8000, "127.0.0.1",() => {
    console.log("Server is running on port 8000");
});
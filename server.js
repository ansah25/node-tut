
const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
    num = _.random(0,20);
    console.log("Hello from zed's server");
    console.log(num);

    //setting header
    res.setHeader("Content-Type", "text/html");

    //a simple routing system
    let path = "./views/";

    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-me":
            res.setHeader("Location", "/about");
            res.statusCode = 301;
            res.end();
            break;
        default:
            path += "404.html"
            res.statusCode = 404;
            break;
    }

    //reading from an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end()
        }
        else{
            res.end(data);
        }
        
    })

});

server.listen(3000, () => {
    console.log("request made");
});
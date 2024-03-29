const express = require("express");

//express app
const app = express();

//listening to requests
app.listen(3000);

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname })
});

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname})
});

//redirects
app.get("/about-me", (req, res) => {
    res.redirect("/about")
});

//Use method for sending 404
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname})
});


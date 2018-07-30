// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

app.get("/", function (req, res) {
    res.end("you have done it")
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
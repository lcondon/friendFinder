var createError = require('http-errors');
var express = require('express');
var path = require('path');

var apiRouter = require('./app/routing/apiRoutes');
var htmlRouter = require('./app/routing/htmlRoutes');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/friends', apiRouter);
app.use('/', htmlRouter);



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

module.exports = app;
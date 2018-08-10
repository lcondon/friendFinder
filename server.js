var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var dbase = require('./models');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

dbase.sequelize.sync().then(function(){
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

module.exports = app;
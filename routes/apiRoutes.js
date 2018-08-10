var express = require('express');
var dbase = require('../models')

module.exports = function(app) {

app.get('/api/friends', function (req, res, next) {
    dbase.Friends.findAll({}).then(function(result){
        res.json(result);
    })
});

app.post('/api/friends', function (req, res, next) {
    console.log(req.body);
    var friend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: 0
    };
    friend.routeName = friend.name.replace(/\s+/g, "").toLowerCase();
    for (var i = 0; i < req.body['scores[]'].length; i++) {
        friend.scores += parseInt(req.body['scores[]'][i]);
    };

    var friend2 = {};

    dbase.Friends.create(friend)
        .then(function(){        })
    
    dbase.Friends.findAll({}).then(function(result){
        if (result.length > 1) {
            for (var i = 0; i < result.length; i++) {
                if (result[i].name !== friend.name) {
                    if (Math.abs(friend.scores - friend2.scores) > Math.abs(friend.scores - result[i].scores)) {
                        friend2 = result[i];
                    }
                }
            }
            console.log(friend2);
            res.json(friend2);
        } else {
            res.json(false);
        }
    });
})
};
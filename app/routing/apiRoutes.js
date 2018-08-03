var express = require('express');
var router = express.Router();
var allFriends = require('../data/friends');

router.get('/', function (req, res, next) {
    res.json(allFriends);
});

router.post('/', function (req, res, next) {
    console.log(req.body);
    var friend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body['scores[]']
    };
    console.log(friend['scores']);
    var friendScore1 = 0;
    var friendScore2 = 0;
    var friend2;
    allFriends.push(friend);
    for (var i = 0; i < friend.scores.length; i++) {
        friendScore1 += parseInt(friend.scores[i]);
    }
    console.log(friendScore1);
    for (var i = 0; i < allFriends.length; i++) {
        if (allFriends[i].name !== friend.name) {
            var tempScore = 0;
            for (var k = 0; k < allFriends[i].scores.length; k++) {
                tempScore += parseInt(allFriends[i].scores[k]);
            }
            if (Math.abs(friendScore1 - friendScore2) > Math.abs(friendScore1 - tempScore)) {
                friend2 = allFriends[i];
                friendScore2 = tempScore;
            }
        }
    }
    console.log(friend2);
    res.json(friend2);
})

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.end("hello");
});

router.post('/', function(req,res, next){
    console.log(req.body);
})

module.exports = router;
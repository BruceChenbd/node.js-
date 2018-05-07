var express = require('express');
var Student = require('./Student');
var router = express.Router();
router.post('/remove', function(req, res) {
    var id = req.body.id;
    console.log(id)
    Student.findByIdAndRemove(id, function(err) {
        if (!err) {
            res.json({result: '200'});
        } else {
            res.json({result: err});
        }
    })
});
module.exports = router;
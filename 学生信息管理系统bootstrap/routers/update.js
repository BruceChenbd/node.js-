var express = require('express');
var Student = require('./Student');
var router = express.Router();

router.get('/update/:id' , function(req, res) {
    var id = req.params.id;
    Student.findById(id).exec(function(err, data) {
        if (!err) {
            // console.log(data)
            res.render('update', data);
        }
    })
});
router.post('/api/update/:id', function(req, res) {
    var id = req.params.id;
    Student.findByIdAndUpdate(id, req.body, function(err) {
        if(!err) {
            // 如果没有出错 重新定向到首页位置
            res.redirect('/');
        } else {
            console.log(err);
        }
    })
})
module.exports = router;
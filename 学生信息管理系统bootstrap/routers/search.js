var express = require('express');
var Student = require('./Student');
var router = express.Router();
// 正则表达式 ()中为表达式本身  ?表示正则表达式只实现0次或1次
router.post('/search', function(req, res) {
     var name = req.body.name;
     var phone = req.body.phone;

     Student.find({name:name,phone:phone}).exec(function(err,datas){
        if(!err){
            console.log(datas)
            res.json({status:200,message:'查找成功',datas})
        }
        else{
            alert('查找失败')
        }
    })
});
module.exports = router;




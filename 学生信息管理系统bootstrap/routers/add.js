// 将数据库制作成模块 然后在其他模块引入 为了防止出现重复打开的错误
var express = require('express');
// 如果模块不是在node_module文件夹下的模块
// 那么引入该模块的时候 需要注意模块的路径
var Student = require('./Student')

var router = express.Router();

router.post('/add',function(req, res){
    var stu = new Student(req.body);

    stu.save(function(err ,data){
        if(!err)
        {
            res.json({result:'200'})
        }
        else 
        {
            res.json({result:'0'})
        }
    })
})

module.exports = router

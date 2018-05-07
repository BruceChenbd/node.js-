var express = require('express');
var Student = require('./Student');
var router = express.Router();
// 正则表达式 ()中为表达式本身  ?表示正则表达式只实现0次或1次
router.get('/(:page)?', function(req, res) {
    var page = req.params.page || 1;
    page = parseInt(page);
    // 每页显示1条数据
    var size = 5;
    Student.find().count(function(err, count) {
        // 不足一页 按照一页算
        var totalPage = Math.ceil(count / size);
        // 设置显示的页数
        var pages = [page];
        var leftPage = page;
        var rightPage = page;
        while((leftPage > 1 || rightPage < totalPage) && pages.length < 7) {
            if (leftPage >= 2) {
                -- leftPage;
                pages.unshift(leftPage)
            }
            if (rightPage < totalPage) {
                ++ rightPage;
                pages.push(rightPage);
            }
        }

        Student.find().skip((page - 1) * size).limit(size).exec(function(err, data) {
            res.json({result: '200', data, page, totalPage, pages});
        })
    });
});
module.exports = router;





var mongoose = require('mongoose')

var mongodb = mongoose.connect('mongodb://localhost/stuRouter')

var db = mongodb.connection

db.on('error',function(err){
    console.log('数据库启动失败:' + err)
})
db.once('open',function(){
    console.log('数据库启动成功')
})
var schema = mongoose.Schema({
    name :String ,
    age :Number ,
    phone: String,
    email: String,
    introduce: String
})
var Student = mongoose.model('stu',schema);
//导出模块

module.exports  = Student



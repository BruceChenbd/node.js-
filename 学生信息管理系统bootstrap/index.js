
var express = require('express')

var bodyParser =require('body-parser')

var template = require('art-template')

var app = express();


app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))

app.engine('.html',template.__express)

app.set('view engine','html')

template.config('cache',false)

app.use(require('./routers/index'));
app.use(require('./routers/add'));
app.use(require('./routers/remove'));
app.use(require('./routers/update'));
app.use(require('./routers/search'))

app.listen('2000',function(){
    console.log('服务器启动')
})
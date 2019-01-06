//GET/POST是HTTP最常用请求方法，restful api重要组成部分
//通常get用来获取数据，post用来向后台提交数据

//1.get请求
//express get请求很简单，使用app.get就可以
var express = require('express');
var app = express();
app.get('/daniel',(req,res)=>{
    res.send('hello world');
});
var server = app.listen(3000,()=>{
    console.log('Server Llistening at http://' + server.address().address + server.address().port);
})

//2.post请求
//post请求首先需要在中间件app.use中调用bodyParser对象的方法，解析post传来的数据
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.post('/daniel',(req,res)=>{
    var var1=req.body.var1;
    var var2=req.body.var2;
})
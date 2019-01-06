//Middleware 对处理HTTP请求功能的一种封装，
//Middleware是一个函数，参数是一个网络请求对象req，一个服务器响应对象，一个next函数
//如果web服务看作一个管道，那么网络请求就是一个水流，
//中间件就是管道里处理水流的一个个工具，比如仪表，阀门。按顺序处理网络请求
//中间件处理http请求，最大的特点就是完成一个处理，传给下一个中间件

//1.express中调用 app.use向管道插入中间件
//2.app.user([error],req,res,next);四个参数，如果有error参数，则是错误处理中间件
//3.app.get/post 是app.verb 是处理特殊请求中间件。第一个参数是路径，全路径是/*
//4.如果中间件不调用next，管道就会终止，不会再有后续处理或中间件，next实际就是为了让请求继续
//5.如果不调用next，一般中间件应该发送响应给客户端，常用res.send/res.json/res.render
//6.如果调用next，不要再发送响应给客户端，因为继续中间件，之后的响应都会被忽略
var express = require('express');
var app = express();

app.use((req,res,next)=>{
    console.log('processing request for ' + req.url);
    next();
})
app.use((req,res,next)=>{
    console.log('thanks for playing')
    res.send('thanks for playing')
})
app.get('/',(req,res)=>{
    res.send('hello world');
});
var server = app.listen(3000,()=>{
    console.log('Server Llistening at http://' + server.address().address + server.address().port);
});

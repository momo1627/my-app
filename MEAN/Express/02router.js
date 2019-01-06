//应用服务器的核心在于路由
//路由是客户端发出的网络请求机制，客户端再url中指明他想要的内容
//具体来说URL就是请求路径和请求参数。客户端通过路由，为不同路径指定不同的处理方法
//而服务端根据请求的配置，处理请求，响应给客户端

var express = require('express');
var app = express();
app.get('/',(req,res)=>{
    res.send('hello world');
});
var server = app.listen(3000,()=>{
    console.log('Server Llistening at http://' + server.address().address + server.address().port);
});

//app.get('/',(req,res)=>{})
//当客户端发出 GET请求，且目标路径时根目录/时，由回调函数处理请求的request和response对象
//相应的请求方法还有 post put del

//Express特点在与 在http模块之上，添加了一个中间件Middleware 处理HTTP请求的函数

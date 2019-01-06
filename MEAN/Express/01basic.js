//express 是node成熟的后端框架
//三个主要核心概念，路由，中间件，模板引擎；
//框架核心是对HTTP模块的再封装，让http请求处理更简单
var express = require('express');
var app = express();
//相比http模块，express响应请求时，有了路径参数，并且内部封装了返回头设置代码
app.get('/',(req,res)=>{
    res.send('hello world');
});
var server = app.listen(3000,()=>{
    console.log('Server Llistening at http://' + server.address().address + server.address().port);
})
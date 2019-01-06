//express中request对象由特有属性和方法，网络请求的参数，都在req对象中
//req.params;req.query;req.body
//1.req.params
//url路径id 与 req.params.id 直接对应
//req.params对象获取url的参数
var express = require('express');
var app = express();
//相比http模块，express响应请求时，有了路径参数，并且内部封装了返回头设置代码
app.get('/user/:id',(req,res)=>{
    res.send('user is' + req.params.id);
});
var server = app.listen(3000,()=>{
    console.log('Server Llistening at http://' + server.address().address + server.address().port);
})

//2.req.query 处理url查询参数，
//在url问号后面有一个或多个参数 ?key=value 查询服务器数据库中的数据

//3.req.body 处理post请求中所带body数据，尤其是表单数据
//nodejs不能直接解析body，需要先用body-parser模块的中间件才可以使用req.body
//中间件的bodyParser()方法，处理body为默认JSON格式，从而方便的获取req.body的数据

//4.网络请求方法
//4.1对于路径path中的变量，可以使用req.params.varables
//4.2对于get 查询?xxxx=,使用req.query.variables
//4.4对于post请求中的变量，使用req.body
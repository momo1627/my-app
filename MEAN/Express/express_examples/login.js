var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//相比http模块，express响应请求时，有了路径参数，并且内部封装了返回头设置代码
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.sendFile('F:/github/MEAN/Express/express_examples/index.html');
});
app.post('/login',function(req,res){
    var user_name = req.body.user;
    var password = req.body.password;
    console.log(`username = ${user_name}；password = ${password}`)
    res.end("yes")
});
var server = app.listen(3000,()=>{
    console.log('Server Llistening at http://' + server.address().address + server.address().port);
});
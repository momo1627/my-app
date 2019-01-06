//postman 可以方便的调试后端接口，验证rest api
//1.postman get/post请求验证
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//1.1 req.query 提取request url的查询key值
//app.get 会将返回query的key给客户端
app.get('/api/users',(req,res)=>{
    var user_id = req.query.id;
    var token = req.query.token;
    var name = req.query.name;
    res.send(`id=${user_id} token=${token} name=${name}`);
})
//app.post 使用body获取客户端的请求
//body/post请求的content-type:application/x-www-form-urlencoded
app.post('/api/users',(req,res)=>{
    var post_user_id = req.body.id;
    var post_token = req.body.token;
    var post_name = req.body.name;
    res.send(`id=${post_user_id} token=${post_token} name=${post_name}`);
})
app.listen(port);
console.log(`server started! at http://localhost:${port}`)
//1.2 打开postman 验证


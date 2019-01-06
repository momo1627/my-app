//静态目录，是客户端不通过路由映射而直接访问的目录
//工程的app.js文件设置public目录
//客户端可以直接访问 public/stylesheets/style.css 文件
//也可以设置不同的文件目录，比如上传，图片等待
var express = require('express');
var path = require('path')
var app = express();
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.send('hello world');
});
var server = app.listen(3000,()=>{
    console.log('Server Llistening at http://' + server.address().address + server.address().port);
})
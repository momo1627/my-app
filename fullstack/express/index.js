var express = require('express');
var app = express();
app.all('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-Requested-With');
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By','3.2.1');
    res.header('Content-Type','application/json;charset=utf-8');
    next()
})
app.get('/items',(req,res)=>{
    // let mytext = {
    //     name:'milk',
    //     price:'$4',
    //     date:'today',
    // }
    // res.send(mytext)
    res.send('haha')
})

var server = app.listen(8000,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`listening ${host},${port}`)
})
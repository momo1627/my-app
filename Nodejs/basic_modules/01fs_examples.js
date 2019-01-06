//fs文件是nodejs内置的文件系统模块，负责读写文件
//fs模块同时提供了异步和同步的方法 但同步不推荐
//fs异步读取文件 
//fs.readFile方法
var fs = require('fs');
fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    } else{
        console.log(data);
    }
})
//fs也可以读取二进制 图片，视频文件

//fs写文件 
//fs.writeFile 方法
//如果没有文件不存在，则自动新建路径文件
var writeData = 'Hello,Node.js';
fs.writeFile('output.txt',writeData,(err)=>{
    if(err){
        console.log(err)
    } else{
        console.log('ok.')
    }
    fs.stat('sample.txt',(err,stat)=>{
        if(err){
            console.log(err);
        } else{
            console.log(stat.isFile());
            console.log(stat.isDirectory());
            if(stat.isFile()){
                console.log(stat.size);
                console.log(stat.birthtime);
                console.log(stat.mtime)
            }
        }
    });
})

//读取文件信息 fs.stat
//回调函数stat对象，其属性返回目标文件的信息


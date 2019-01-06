//nodejs 单线程简化web程序，采用js编程
//1.创建一个简单的nodejs web服务器
var http = require('http');
var app = http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("hello daniel");
})
var server = app.listen(3000,()=>{
    console.log('Server Llistening at http://' + server.address().address + server.address().port)
})
//通过HTTP模块创建了一个http服务，监听客户端请求，并响应请求；
//Node核心理念是事件驱动编程，客户端触发事件，后端响应前端请求
//此例中 事件即客户端访问网址，发起请求。服务端返回简单的text；

//2.运行node工程
//2.1 package.json 一个json文件，定义了项目所依赖的模块，已经项目的配置信息；
//package.json可以手动编写，也可以npm init自动生成
//2.2 modules 安装 使用npm install 根据package配置文件，自动安装所有指定依赖模块，放入node_modules文件夹
//也可独立安装 npm install express --save 通过save添加入package.json

//3.node服务自动重启工具，nodemon 自动刷新服务器，反应服务器代码更改
//npm install -g nodemon 安装后，通过nodemon filename 启动node工程

//4.node的module应用
//开发一个规模的程序不能只用一个文件，通过把各个功能拆分分装，组合使用。一个模块就是一个文件，实现一个功能
//模块输出调用单一变量或函数，module.exports = variable 和 var variable = require('module')
//模块输出调用多个变量或函数， exports.name = variable 和 var object = require('module') object.name1,object.name2

//5.Nodejs编码规范
//1.两空格缩进，而不是tab
//2.json规定双引号，所以node最好单引号区分
//3.大括号并行，不另起一行
//4.分隔符;不可省略
//模板引擎。，模板引擎将页面模板和要显示的数据结合在一起生产HTML
//模板引擎通常在服务器端直接解析为HTML再传输给客户端，客户端无法判断页面是否为模板引擎
//EJS模板，EJS文件酷似html文件  

//express中引入ejs模板引擎
//1.在已有express工程引入EJS
//npm install ejs
//2.创建新的express工程文件
//express --view-ejs projectname

//3.进入工程文件，引入依赖包
//4.启动应用
//4.1 设置试图存放的目录，/views，工程将在/views目录下调用模板引擎
app.set('views', path.join(__dirname, 'views'));
//4.2 制定ejs模板引擎
app.set('view engine', 'ejs');
//4.3 设定html模板引擎
app.set('view engine','html');
app.engine('.html',require('ejs').__express)
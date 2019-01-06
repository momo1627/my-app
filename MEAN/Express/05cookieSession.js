//COOKIE和Session 主要用来保存 HTTP的状态，使之与之前的请求关联起来
//1.Cookie
//Cookie是服务器给首次访问web用户的的独有标签，好比身份证明。服务器用cookie识别用户
//Cookie中包含一个列表，数据格式name=value，通过response的set-cookie方法，把用户识别放在request header里
//1.2 Cookie处理，Cookie是HTTP协议一部分，
//1.2.1 服务器向客户端发送Cookie
//1.2.2 浏览器将Cookie保存
//1.2.3 浏览器每次请求是，都将之前保存Cookie发送给服务器
//1.3 Cookie容易被黑客利用，通过篡改cookie值骗取服务器，安全隐患

//2.Session
//对于客户端，session指用户访问网站到离开网站的过程
//对于服务端，session指用户登录时存储用户的登陆信息，这个存储结构也叫session
//2.1 session的作用
//http协议是无状态协议，服务器无法得知当前请求之前的状态。
//但是服务器了解请求之前的关联请求，需要保存用户的状态，session就是用来保存用户的状态
//2.1.1 一种方法是，服务器内存，保存会话信息
//2.1.2 一种方法是，服务器的数据库存放会话信息；

//2.2 session的应用场景
//express中 express-session中间件用来处理session
//session依赖cookie认证，所以同时使用cookie-parser中间件
//2.2.1 页面跳转时，保存用户的偏好，可以用session，自动展示出用户可能偏好内容
//2.2.2 session常来提供用户验证信息，用户在一个页面登陆后，就不用再加载或跳转相关页面时再次登陆
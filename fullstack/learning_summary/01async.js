// project1中 async使用 
// 1.async函数返回一个promise 函数内return的内容，就是promise对象 resolve的参数
// 2.await后面的promise对象，知道promise resolve才继续函数内容，reject则函数中止
// 3.await promise对象的结果，会得到promise对象 resolve的参数。这是基于generator的执行器，会将promise的结果，再替代给yield 语句
// 4.总而言之，promise和async 重要的是resolve状态的参数。在axios或fetch请求中，即是 response
// 5.而promise对象的resolve参数，只要在then的回调函数中return，就会继续传给下一个then用


var fetch = require('node-fetch')
const url = 'http://localhost:8000/items';
async function request(url){
    const response = await fetch(url,{method:'GET'});
    return response;
}
request(url).then(x=>{console.log(x);return x.body}).then(x=>{console.log(x)})
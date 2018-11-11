import React from "react";
import "./todo.css";
import axios from 'axios'
// function* gen(){
//     var url = 'https://api.cdnjs.com/libraries/jquery';
//     var result = yield fetch(url)
//     console.log(result.bio)
// }
// var g = gen();
// var result = g.next();
// result.value.then((data)=>{return data.json}).then((data)=>g.next(data))



// function ajax(method,url,data){
//     var request = new XMLHttpRequest();
//     return new Promise((resolve,reject)=>{
//         //定义ajax对象状态改变时，根据状态调用不同函数
//         request.onreadystatechange = ()=>{
//             if (request.readyState === 4){
//                 if(request.status ===200){
//                     resolve(request.responseText);
//                 } else{
//                     reject(request.status)
//                 }
//             }
//         }
//         //定义ajax对象的请求方式和目标
//         request.open(method,url);
//         //发送response，如果有data就post/没data就get
//         request.send(data)
//     })
// }

//     var result;
//     var d = ajax('GET','https://api.cdnjs.com/libraries/jquery')
//     d.then((x)=>{result=JSON.parse(x);console.log(result.name);}).catch(()=>{console.log('error')})
async function requestUrl(url){
    const response = await axios.get(url)
    return response;
}
export default class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            data:''
        }
    }
    getData=()=>{
        requestUrl('https://api.cdnjs.com/libraries/jquery').then((x)=>{this.setState({data:x.data.version})})
    }
    render(){
        return(
            <div>{this.state.data}
                <button onClick={this.getData}>getData</button>
            </div>
        )
    }
}
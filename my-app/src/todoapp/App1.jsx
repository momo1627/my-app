import React from "react";
import "./todo.css";
import axios from 'axios' 
function setId(){
    var number = 0;
    function nextNumber(){
        ++number;
        return `id${number}`
    }
    return nextNumber
}
const newId = setId()
const BASE_URL='http://localhost:3000';
export default class Item extends React.Component{
    constructor(){
        super();
        this.state ={
            items:[],
            newItem:''
        }
    }
    async componentDidMount() {
        const response = await axios.get(`${BASE_URL}/items`);
        this.setState({ items: response.data });
      }
    handleInput = (e)=>{
        const value = e.target.value;
        this.setState({
            newItem:value
        })
    }
    handleSubmit = async (e) =>{
        e.preventDefault();
        const newItemName = this.state.newItem.trim();
        if(!newItemName){
            return ;
        }
        const newItem = {
            id:newId(),
            task:newItemName,
            isCompleted:false,
            isDeleted:false
        }
        await axios.post(`${BASE_URL}/items`,newItem)
        this.setState({
            newItem:'',
            items:[newItem].concat(this.state.items)
        })
    }
    handleDelete =  (e)=>{
        const target = e.target.value;
        const items = this.state.items
        items.map((item)=>{
            if (item.id === target){
                item.isDeleted = true;
            }
            return item
        })
        this.setState({items:items})
    }
    render(){
        const element = this.state.items.map((x)=>{return <div>{x.task}<button onClick={this.handleDelete}>删除</button></div>})
        return(
            <div>
            <form action="" className='todo-form' onSubmit={this.handleSubmit} >
              <input type="text" className='todo-item' placeholder='please enter next todo:' value={this.state.newItem} onChange={this.handleInput} />  
              <input type="button" className='todo-button' value='add an item'  onClick={this.handleSubmit}/>
            </form>
            <div>{element}</div>
            </div>
        )
    }
}
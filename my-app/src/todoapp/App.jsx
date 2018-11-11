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
async function requestUrl(url){
    const response = await axios.get(url)
    return response;
}
const url = 'http://localhost:3000/items/1'
class Itemlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:this.props.items
        }
    }
    handleCheck = (e)=>{
        const target = e.target.value;
        const items = this.state.items;
        items.map((item)=>{
            if (item.id === target){
                item.isCompleted = !item.isCompleted
            }
            return item
        })
        this.setState({items:items})
    }
    handleDelete = (e)=>{
        const target = e.target.value;
        const items = this.state.items;
        items.map((item)=>{
            if (item.id === target){
                item.isDeleted = true
            }
            return item
        })
        this.setState({items:items})
    }
    
    render(){
        var element,listitems;
        const alllist = this.state.items.filter((item)=>{return item.isDeleted === false});
        const pendinglist = alllist.filter((item)=>{return item.isCompleted === false})
        const completedlist = alllist.filter((item)=>{return item.isCompleted === true})
        if(this.props.filter === 'all') {
            listitems=alllist
            
        } else if(this.props.filter === 'pending'){
            listitems=pendinglist
        } else{
            listitems=completedlist
        }
        element = listitems.map((listitem)=>{return (
          <div className='item' key={listitem.id}>
            <span className={listitem.isCompleted ? 'completed':'pending'}>{listitem.task}</span>
            <div>
              <input type="checkbox" checked={listitem.isCompleted} onChange={this.handleCheck} value={listitem.id} /> 
              <button onClick={this.handleDelete}  value={listitem.id}>delete</button>
            </div>
          </div>)})
        return (
          <div>{element}</div>
        )
    }
}
export default class Filter extends React.Component{
    constructor(){
        super();
        this.state = {
            newItem:'',            
            items:[],
            filter:'all'
        }
        
    }
    componentDidMount(){
        const source = requestUrl(url);
        const items  = source.then(x=>{return x.data[0]})
        this.setState({items:items})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.newItem === ''){
            alert('please enter a task');
            return false
        }
        const x = { 
            task:this.state.newItem,
            isCompleted:false,
            id:newId(),
            isDeleted:false
        }
        const oldItems = this.state.items;
        oldItems.unshift(x);
        this.setState({items:oldItems,newItem:''})
    }
    handleInput = (e) => {
        const value = e.target.value;
        this.setState({
            newItem:value
        })

    }
    handleFilter = (e) => {
        const value = e.target.checked && e.target.value;
        this.setState({
            filter:value,
        })     
    }
    render(){
        return(
          <div className='todo-container'>
            <h1>To do list</h1>
            <form action="" className='todo-form' onSubmit={this.handleSubmit} >
              <input type="text" className='todo-item' placeholder='please enter next todo:' value={this.state.newItem} onChange={this.handleInput} />  
              <input type="button" className='todo-button' value='add an item'  onClick={this.handleSubmit}/>
            </form>
            <form action="" className='filter'>
              <span>
                <input type="radio"  value='all' checked={this.state.filter==='all'} onChange={this.handleFilter} />All
              </span>
              <span>
                <input type="radio"  value='pending' checked={this.state.filter==='pending'} onChange={this.handleFilter} />Pending
              </span>
              <span>
                <input type="radio"  value='completed'  checked={this.state.filter==='completed'} onChange={this.handleFilter} />Completed
              </span>
            </form>
            <div className='items'>
              <Itemlist  items={this.state.items} filter={this.state.filter} />           
            </div>
          </div>
            
        )
    }
}
import React from "react";
import "./todo.css";
import axios from 'axios';
import uuid from 'uuid';
const BASE_URL='http://localhost:3000';
class Item extends React.Component{
    handleComplete = () => {
        const {onCompleted,item} = this.props;
        if(onCompleted){
            onCompleted(item)
        }
    }
    handleDelete = () => {
        const {onDeleted,item} = this.props;
        if(onDeleted){
            onDeleted(item)
        }
    }
    render(){
        return (
            <li>
                <span className={this.props.item.isCompleted ? 'completed':'pending'}>{this.props.item.task}</span>
                <input type="checkbox" checked={this.props.item.isCompleted} onChange={this.handleComplete}/>
                <button onClick={this.handleDelete}>delete</button>
            </li>
        )
    }
}
class Itemlist extends React.Component{
    render(){
        var source;
        if (this.props.filter === 'all'){
            source = this.props.items;
        } else if(this.props.filter ==='pending'){
            source = this.props.items.filter(item=>!item.isCompleted)
        } else{
            source = this.props.items.filter(item=>item.isCompleted)
        }
        const element = source.map((item)=>{
            return <Item key={item.id} item={item} onCompleted={this.props.onCompleted} onDeleted={this.props.onDeleted}/>
        })
        return(
            <ul>
                {element}
            </ul>
        )
    }
}
class ItemInput extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.onSubmit}>
                <input type="text" value={this.props.newItem}
              onChange={this.props.onInput}
              placeholder="What are you gonna do next" />
                <button type='submit'>Add Item</button>
            </form>
        )
    }
}
class Filter extends React.Component{
    render(){
        return(
            <form action="">
                <input type="radio" name='filter' value='all' onChange={this.props.onFilter} checked={this.props.filter==='all'}/><span>all</span>
                <input type="radio" name='filter' value='pending' onChange={this.props.onFilter} checked={this.props.filter==='pending'}/><span>pending</span>
                <input type="radio" name='filter' value='completed' onChange={this.props.onFilter} checked={this.props.filter==='completed'}/><span>completed</span>
            </form>
        )
    }
}
export default class TodoApp extends React.Component{
    constructor(){
        super();
        this.state = {
            items:[],
            newItem:'',
            filter:'all',
            isLoading:false,
        }
    }
    async componentDidMount(){
        const response = await axios.get(`${BASE_URL}/items`);
        this.setState({items:response.data})
    }
    handleInput = (e) => {
        const name = e.target.value;
        this.setState({newItem:name})
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const newItemTask = this.state.newItem.trim();
        if (!newItemTask){
            return;
        }
        const newItem = {
            id:uuid.v4(),
            task:this.state.newItem,
            isCompleted:false,
        };
        await axios.post(`${BASE_URL}/items`,newItem);
        this.setState({
            newItem:'',
            items:[newItem].concat(this.state.items)
        })
    }
    handleDeleteItem = async (item)=>{
        await axios.delete(`${BASE_URL}/items/${item.id}`);
        const newItems = this.state.items.filter(x => x.id !== item.id);
        this.setState({items:newItems})
    }
    handleCompleteItem = async (item) => {
        let itemToUpdate = null;
        const newItems = this.state.items.map(x => {
            if (x.id === item.id){
                itemToUpdate = { ...x, isCompleted:!item.isCompleted};
                return itemToUpdate
            }
            return x
        })
        await axios.put(`${BASE_URL}/items/${itemToUpdate.id}`,itemToUpdate);
        this.setState({items:newItems})
    }
    handleFilter = (e)=> {
        this.setState({
            filter:e.target.value
        })
    }
    renderItems() {
        return this.getDisplayItems().map(item => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              onToggleComplete={this.handleToggleItemComplete}
              onDelete={this.handleDeleteItem}
            />
          );
        });
      }
    getDisplayItems() {
        const { filter } = this.state;
        let filterFunc = () => true;
        if (filter === "completed") {
          filterFunc = item => item.completed;
        } else if (filter === "pending") {
          filterFunc = item => !item.completed;
        }
        return this.state.items.filter(filterFunc);
      }
    render(){
        return(
            <div>
                <ItemInput onInput={this.handleInput} onSubmit={this.handleSubmit} newItem={this.state.newItem} />
                <Filter onFilter={this.handleFilter} filter={this.state.filter} />
                <Itemlist items={this.state.items} onCompleted={this.handleCompleteItem} onDeleted={this.handleDeleteItem} filter={this.state.filter}/>
            </div>
        )
    }
}
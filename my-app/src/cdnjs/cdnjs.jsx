import React from "react";
import axios from 'axios'
const BASE_URL = 'https://api.cdnjs.com/libraries/'
export default class Search extends React.Component{
    constructor(){
        super();
        this.state={
            isLoading:false,
            data:{},
            target:''
        }
    }
    componentDidMount(){
        this.loadData()
    }
    handleInput = (e)=>{
        const value = e.target.value;
        this.setState({target:value,isLoading:false})

    }
    handleSubmit = (e)=>{
        e.preventDefault();
        if (this.searchTimer) {
            clearTimeout(this.searchTimer);
          }
          this.searchTimer = setTimeout(() => {
            this.loadData();
          }, 1000);
        this.setState({isLoading:true})
    }
    loadData(){
        const target = this.state.target.trim()
        this.getData(target);
    }
    getData =  async (target)=>{
        const response = await axios.get(`https://api.cdnjs.com/libraries/${target}`)
        this.setState({data:response.data,isLoading:false})
        console.log(response.data)
    }
    render(){
        const { name, filename, version, license, assets = [] } = this.state.data;
        return(
        <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleInput} value={this.state.target}/>
            <button type='submit'>Search</button>
        </form>
        {this.state.isLoading && <h3>Data is loading</h3>}
        {name && 
        <Result name={name} filename={filename} version={version} license={license} assets={assets}/>
        }
        </div>
        )
        
    }
}
class Result extends React.Component{
    render(){
        const assets = this.props.assets.map((item)=>{return <div>{item.version}</div>})
        return(
            <div>
                <div>{`name: ${this.props.name}`}</div>
                <div>{`filename: ${this.props.filename}`}</div>
                <div>{`version: ${this.props.version}`}</div>
                <div>{`license: ${this.props.license}`}</div>
                <div>{assets}</div>
            </div>
        )
    }
}

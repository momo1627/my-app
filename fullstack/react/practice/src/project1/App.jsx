import React from 'react';
import axios from 'axios'
export default class Page2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mytext:'',
            items:{
                name:'',
                date:'',
                price:'',
            }
        }
    }
    
    async componentDidMount(){
        // axios.get('http://localhost:8000/items').then(response=>{
        //     const source = response.data;
        //     this.setState({mytext:source})
        // })
        // fetch('http://localhost:8000/items',{method:"GET"}).then(
        //     (data)=>{return data.text()}
        // ).then(
        //     (data)=>{
        //         this.setState({mytext:data})
        //     }
        // )
        const result = await axios.get('http://localhost:8000/items');
        const source = result.data;
        this.setState({mytext:source})
    }
    render(){
        return(
            <div>
                <div>{this.state.mytext}</div>
                <div>{this.state.items.name}</div>
                <div>{this.state.items.price}</div>
                <div>{this.state.items.date}</div>

            </div>
        )
    }
}
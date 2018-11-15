import React from 'react';
class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={
            value:''
        }
    }
    handleInputChange = (e)=>{
        const value = e.target.value;
        this.setState({
            'value':value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const submit = this.props.handleSearch;
        submit(this.state.value)
    }
    render(){
        return(
            <form action="" onSubmit={this.handleSubmit} value={this.state.value}>
              <input type="text" onChange={this.handleInputChange}/>
              <input type="submit" />
            </form>
        )
    }
}
export default SearchBar
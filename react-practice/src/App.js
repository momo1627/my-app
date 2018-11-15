import React from 'react';
/*global google*/
import GoogleMap from './GoogleMap/GoogleMap'
import SearchBar from './GoogleMap/SearchBar'
import axios from 'axios'
import './App.css';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      address:'sydney'
    }
  }
  handleSearch = (address)=>{
    this.setState({
      address,
    })
  }
  render(){
    return(
      <div>
        <SearchBar handleSearch={this.handleSearch}/>
        <GoogleMap address={this.state.address} />
      </div>
    )
  }
}

export default App;

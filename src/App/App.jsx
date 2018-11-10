import React from 'react'
import Nav from './Nav'
import Header from './Header'
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Route";
class App extends React.Component{
    render(){
        return(
            <div>
              <Router>
                <React.Fragment>
                  <Header />
                  <Nav />
                  <Routes />
                </React.Fragment>
              </Router>  
              
            </div>
            
        )
    }
    
}
export default App
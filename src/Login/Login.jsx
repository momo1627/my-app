import React from 'react'
import * as LoginApi from './LoginApi'
import { pick } from "lodash/object";
import axios from 'axios'
export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'',
            password:''
        }
    }
    handleFieldChange =(e)=>{
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }
    handleSubmit = async (e)=>{
        e.preventDefault();
        const userInput = pick(this.state,[
            'username',
            'password',
        ])
        const response = await LoginApi.getAccessToken(
            userInput.username,
            userInput.password
        )
        axios.defaults.headers.common.Authorization = `Bearer ${response.access_token}`
        localStorage.setItem('access_token',response.access_token)
        window.location.href = 'http://localhost:3000/#/dashboard'
    }
    render(){
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="userName">Username</label>
                <input type="text" name='username' onChange={this.handleFieldChange} value={this.state.username}/>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' onChange={this.handleFieldChange} value={this.state.password}/>
                <button type='submit'>Login</button>
            </form>
        )
    }
}
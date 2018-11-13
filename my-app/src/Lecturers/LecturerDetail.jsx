import React from 'react'
import * as LecturerApi from './LecturerApi'
import TextInput from '../Common/TextInput'
import Loading from '../Common/Loading'
import { pick } from "lodash/object";
export default class LecturerDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            lecturers:{
                name:'',
                email:'',
                staffNumber:'',
            },
            isLoading:true
        }
    }
    isCreating(){
        return this.props.match.params.id === 'create'
    }
    async componentDidMount(){
        let lecturers = []
        if (!this.isCreating()){
            lecturers = await LecturerApi.getLecturersById(this.props.match.params.id)
        }
        this.setState({
            isLoading:false,
            lecturers:lecturers,
        })
    }
    handleFieldChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            lecturers:{
                ...this.state.lecturers,
                [name]:value
            }
           
        })
    }
    handleSubmit = async (e)=>{
        e.preventDefault();
        const userInput = pick(this.state.lecturers,[
            'name',
            'email',
            'staffNumber'
        ])
        if(this.isCreating()){
            const {lecturers} = this.state;
            await LecturerApi.createLecturers(lecturers);
            window.location.href = 'http://localhost:3000/#/lecturer'
        } else{
            const id = this.props.match.params.id;
            await LecturerApi.updateLecturers(id,userInput)
            window.location.href = 'http://localhost:3000/#/lecturer'
        }
    }
    deleteLecturers = async ()=>{
        const id = this.props.match.params.id;
        await LecturerApi.deleteLecturers(id);
        window.location.href = 'http://localhost:3000/#/lecturer'
    }
    renderLecturers(){
        const {lecturers:{name,email,staffNumber}} = this.state
        const number = parseInt(staffNumber)
        return(
            <form action="" onSubmit={this.handleSubmit}>
                <TextInput name='name' type='text' onChange={this.handleFieldChange} placeholder='Name' value={name} />
                <TextInput name='email' type='text' onChange={this.handleFieldChange} placeholder='Email' value={email} />
                <TextInput name='stuffNumber' type='text' onChange={this.handleFieldChange} placeholder='staffNumber' value={staffNumber} />
                <button type='submit'>submit</button>
            </form>
        )
    }
    render(){
        return(
            <div>
                {this.state.isLoading && <Loading />}
                {!this.state.isLoading && this.state.lecturers && this.renderLecturers()}
                <button type='button' onClick={this.deleteLecturers}>delete</button>
                {!this.state.isLoading && !this.state.lecturers && <h3>not found</h3>}
            </div>
        )
    }
    
}
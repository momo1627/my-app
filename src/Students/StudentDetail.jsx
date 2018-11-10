import React from 'react'
import * as studentApi from './StudentApi'
import Loading from '../Common/Loading'
import { pick } from "lodash/object";

export default class StudentDetail extends React.Component{
    constructor(){
        super();
        this.state ={
            student:null,
            isLoading:true

        }
    }
    isCreating(){
        return this.props.match.params.id === 'create'
    }
    async componentDidMount(){
        var student = []
        if (!this.isCreating()){
            student = await studentApi.getStudentById(this.props.match.params.id)
            student = {
                ...student,
                firstName:student.fullName.split(' ')[0],
                lastName:student.fullName.split(' ')[1]
            }
        }
        this.setState({
            isLoading:false,student:student,
        })
    }
    handleFieldChange = (e)=>{
            const name = e.target.name;
            const value = e.target.value;
            this.setState({
                student:{
                    ...this.state.student,
                    [name]:value,
                }
            })
        }
    handleSubmit = async (e)=>{
        e.preventDefault();
        const userInput = pick(this.state.student,[
                'firstName',
                'lastName',
                'gender',
                'dateOfBirth',
                'email',
                'credit',
        ])
        if (this.isCreating()){
            const {student} = this.state;
            await studentApi.createStudent(student)
            alert('created new student')
            window.location.href = 'http://localhost:3000/#/students'
        } else{
            await studentApi.updateStudent(this.props.match.params.id,userInput)
            alert('updated student')
            window.location.href = 'http://localhost:3000/#/students'
        }
    }
    deleteStudent = async ()=>{
        await studentApi.deleteStudent(this.props.match.params.id)
        alert('deleted student')
        window.location.href = 'http://localhost:3000/#/students'
    }
    renderStudent(){
        
        const { student:{firstName,lastName,gender,dateOfBirth,email,credit}} = this.state
        
        
        return(
            <div>
                <h3>Student Detail</h3>
                <button onClick={this.deleteStudent}>Delete Student</button>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="firstName">Full name</label>
                    <input type="text" name='firstName' onChange={this.handleFieldChange} value={firstName}/>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name='lastName' onChange={this.handleFieldChange} value={lastName}/>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="" onChange={this.handleFieldChange} value={gender}>
                        <option value="">--Select--</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input type="text" name='dateOfBirth' onChange={this.handleFieldChange} value={dateOfBirth}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' onChange={this.handleFieldChange} value={email}/>
                    <label htmlFor="credit">Credit</label>
                    <input type="text" name='credit' onChange={this.handleFieldChange} value={credit}/>
                    <button type='submit'>Save</button>
                    <button type='button'>Cancel</button>
                </form>
            </div>
        )
    }
    render(){
        return(
            <div>
                {this.state.isLoading && <Loading />}
            {!this.state.isLoading && this.state.student && this.renderStudent()}
                {!this.state.isLoading && !this.state.student && <h3>not found</h3>}
            </div>
        )
        
    }
}
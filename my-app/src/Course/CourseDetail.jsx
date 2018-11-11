import React from 'react';
import * as courseApi from './CourseApi'
import Loading from '../Common/Loading'
import { pick } from "lodash/object";
import TextInput from '../Common/TextInput'
import SelectField from '../Common/SelectField'
import TextArea from '../Common/TextArea'
export default class CourseDetail extends React.Component{
    constructor(){
        super();
        this.state = {
            course:{
                title:'',
                fee:'',
                maxStudent:'',
                description:'',
                language:'any'
            },
            isLoading:true
        }
    }
    async componentDidMount(){
        var course = []
        if (!this.isCreating()){
            course = await courseApi.getCourseById(this.props.match.params.id)
        }
        this.setState({
            isLoading:false,course:course,
        })
        
    }
    isCreating(){
        return this.props.match.params.id === 'create'
    }
    handleFieldChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            course:{
                ...this.state.course,
                [name]:value,
                language:'any',
            }
            
        })
    }
    handleSubmit = async (e) =>{
        e.preventDefault();
        const userInput = pick(this.state.course,[
            'title',
            'language',
            'fee',
            'maxStudent',
            'description'
        ])
        if (this.isCreating()){
            const {course} = this.state;
            await courseApi.createCourse(course);
        window.location.href = 'http://localhost:3000/#/courses'
            
        } else{
            const id = this.props.match.params.id;
            await courseApi.updateCourse(id,userInput);
        window.location.href = 'http://localhost:3000/#/courses'

        }

    }
    deleteCourse = async ()=>{
        const id = this.props.match.params.id
        await courseApi.deleteCourse(id);
        window.location.href = 'http://localhost:3000/#/courses'
    }
    renderForm(){
        const { course:{title,fee,maxStudent,description}} = this.state
        return (
        <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Title</label>
                <TextInput onChange={this.handleFieldChange} name='title' type="text" placeholder='Title' value={title} />
                {/* <input onChange={this.handleFieldChange} name='title' type="text" placeholder='Title' value={title}/> */}
                <label htmlFor="">Fee ($)</label>
                <TextInput onChange={this.handleFieldChange} name='fee' type="text" placeholder='Fee' value={fee} />
                {/* <input onChange={this.handleFieldChange} name='fee' type="text" placeholder='Fee' value={fee}/> */}
                <label htmlFor="">Max students</label>
                <SelectField onChange={this.handleFieldChange} name="maxStudent" id="" value={maxStudent}>
                    <option value="">--Select--</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </SelectField>
                {/* <select onChange={this.handleFieldChange} name="maxStudent" id="" value={maxStudent}>
                    <option value="">--Select--</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select> */}
                <TextArea onChange={this.handleFieldChange} name="description" id="" cols="30" rows="10" placeholder='Description for the'  value={description}/>
                {/* <textarea onChange={this.handleFieldChange} name="description" id="" cols="30" rows="10" placeholder='Description for the'  value={description}></textarea> */}
                {/* <button type='submit'>{this.isCreating() ? 'Create' : 'Update'}</button> */}
                {/* <Button type='submit'>{this.isCreating() ? 'Create' : 'Update'}</Button> */}
        </form>
        )
    }
    render(){
        return(
            <div>
                {this.state.isLoading && <Loading />}
                {!this.state.isLoading && this.state.course && this.renderForm()}
                <button type='button' onClick={this.deleteCourse}>delete</button>
                {!this.state.isLoading && !this.state.course && <h3>not found</h3>}
            </div>
        )
    }
}
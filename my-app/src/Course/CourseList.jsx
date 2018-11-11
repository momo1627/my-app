import React from 'react';
import Loading from '../Common/Loading';
import Course from './Course'
import {Link} from 'react-router-dom'
import * as CourseApi from './CourseApi'
export default class CourseList extends React.Component{
    constructor(){
        super();
        this.state={
            courses:[],
            error:'',
            isLoadging:false,
        }
    }
    async componentDidMount(){
        this.setState({isloading:true});
        try {
            const courses = await CourseApi.getCourse();
            this.setState({courses,isloading:false,error:''})
        } catch (error) {
            this.setState({
                error:'Sorry, error ocurred while loading courses',
                isloading:false
            })
        }
    }
    renderCourse(){
        return this.state.courses.map(item=>{
            return <Course key={item.id} course={item} />
        })
    }
    render(){
       
        return(
        <div>
            <h1>Course</h1>
            <button><Link to='/courses/create'>add New</Link></button>
          {this.state.error && <div>{this.state.error}</div>}
          {this.state.isloading && <Loading />}
          {!this.state.error && !this.state.error && this.renderCourse() } 
        </div>
           
        )
    }
}
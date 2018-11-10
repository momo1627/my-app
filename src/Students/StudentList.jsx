import React from 'react'
import Loading from '../Common/Loading';
import Student from './Student'
import {Link} from 'react-router-dom'
import * as StudentApi from './StudentApi'
export default class StudentList extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading:false,
            isLoadingPage:false,
            students:[],
            currentPage:1,
            totalPage:21,
            error:''
        }
    }
    async componentDidMount(){
        this.setState({isLoading:true})
        try {
          const students = await StudentApi.getStudent(this.state.currentPage);
          this.setState({students:students.students,isLoading:false,error:''})            
        } catch (error) {
          this.setState({
              error:'Sorry, error occurred while loading students',
              isLoading:false
          })
        }
    }
    fetchStudentByPage = async (pageNumber) =>{
        this.setState({currentPage:pageNumber,isLoadingPage:true});
        try {
            const data = await StudentApi.getStudent(pageNumber);
            console.log(data)
            this.setState({
                students:data.students,
                totalPage:data.totalPage,
                isLoading:false,
                isLoadingPage:false,
                error:''
            })
        } catch (error) {
            this.setState({
                error:'Sorry, error occurred while loading students',
                isLoading:false,
                isLoadingPage:false,
                students:[]
            })
        }
    }
    renderStudents(){
        return this.state.students.map(item=>{
            return <Student key={item.id} students={item} />
        })
    }
    render(){
        const {totalPage, currentPage} = this.state;
        const hasPrev = currentPage>1;
        const hasNext = currentPage<totalPage;
        let pageNumber =[];
        if (currentPage === 1){
            pageNumber = [1,2,3]
        } else if(currentPage === totalPage){
            pageNumber = [totalPage-2,totalPage-1,totalPage]
        } else{
            pageNumber = [currentPage-1,currentPage,currentPage+1]
        }     
        const element = pageNumber.map((item)=>{return <button key={item} onClick={this.fetchStudentByPage.bind(this,item)}>{item}</button>})
        return(
            <div>
            <h1>Student</h1>
            <button><Link to='/students/create'>Add New</Link></button>
            {this.state.isLoading && <h3>No students:</h3>}
            {this.state.isLoading && <Loading />}

            <table>
                <tbody>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Credit</th>
                <th></th>
            </tr>
            {!this.state.isLoading && this.state.students.length && this.renderStudents()}
            </tbody>
            </table>
            <div>
            {hasPrev && <button onClick={this.fetchStudentByPage.bind(this,currentPage - 1)}>previous</button>}
            {hasNext && <button onClick={this.fetchStudentByPage.bind(this,currentPage + 1)}>next</button>}
            </div>
            <div>{element}</div>
            
            </div>
        )
    }
}
import React from 'react'
import * as LecturerApi from './LecturerApi'
import Loading from '../Common/Loading'
import {Link} from 'react-router-dom'
class Lecturer extends React.Component{
    constructor(){
        super();
        this.state={
            lecturers:[],
            isLoading:false,
            error:''
        }
    }
    async componentDidMount(){
        this.setState({isLoading:true})
        try {
        const lecturers = await LecturerApi.getLecturers();

            this.setState({
                lecturers,
                isLoading:false
            })
        } catch (error) {
            this.setState({
                error:'error happened',
                isLoading:false
            })
        }
        
    }
    renderLecturers(){
        return this.state.lecturers.map((item)=>{
            return(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.staffNumber}</td>
                    <td><Link to={`lecturer/${item.id}`}>details</Link></td>
                </tr>
            )
        })
    }
    render(){
        return(
            <div>
                <h1>Lecturers</h1>
                <button><Link to={`lecturer/create`}>Add new Lecturer</Link></button>
                {this.state.isLoading && !this.state.error && <Loading />}
                {!this.state.isLoading && this.state.error && <h3>{this.state.error}</h3>}
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Stuff number</th>
                            <th></th>
                        </tr>
                        {!this.state.isLoading && !this.state.error && this.renderLecturers()}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Lecturer;
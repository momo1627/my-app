import React from 'react'
import {Link} from 'react-router-dom'

function Student({students}){
    return(
        <tr>
            <td>{students.fullName}</td>
            <td>{students.email}</td>
            <td>{students.gender}</td>
            <td>{students.dateOfBirth}</td>
            <td>{students.credit}</td>
            <td><Link to={`students/${students.id}`}>detail</Link></td>
        </tr>
    )
}
export default Student
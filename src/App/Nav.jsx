import React from 'react'
import {Link} from 'react-router-dom'
function Nav(){
    return(
        <ul>
          <h3>QUICK LINKS</h3>
          <li><Link to='/'>Dashboard</Link></li>
          <li><Link to='/courses' >Course</Link></li>
          <li><Link to='/lecturer' >Lecturers</Link></li>
          <li><Link to='/students' >Students</Link></li>
        </ul>
        
    )
}
export default Nav
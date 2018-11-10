import React from 'react'
import {Link} from 'react-router-dom'
function Dashboard(){
    return(
        <div>
            <h1>Welcome to LMS</h1>
            <div>
                <h3>Course</h3>
                <p>All kinds of courses needed for IT Industry</p>
                <div><Link to='courses/create'>Add new course</Link></div>
                <div><Link to='courses'>All courses</Link></div>
            </div>
            <div>
                <h3>Lecturers</h3>
                <p>Best lecturers in IT world</p>
                <div><Link to='lecturer/create'>Add new lecturer</Link></div>
                <div><Link to='lecturer'>All lectures</Link></div>
            </div>
            <div>
                <h3>Students</h3>
                <p>Hard-working and smart students</p>
                <div><Link to='students/create'>Add new students</Link></div>
                <div><Link to='students'>All students</Link></div>
            </div>

        </div>
    )
}
export default Dashboard;
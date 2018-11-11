import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Course from '../Course/CourseList';
import CourseDetail from '../Course/CourseDetail'
import Student from '../Students/StudentList';
import Lecturer from '../Lecturers/Lecturer';
import Dashboard from '../Dashboard/dashboard';
import StudentDetail from '../Students/StudentDetail'
import LecturerDetail from '../Lecturers/LecturerDetail'
import Login from '../Login/Login'

export default function Routes(){
    return(
        <Switch>
            <Redirect exact path='/' to='/dashboard'/>>
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/lecturer' component={Lecturer} />
            <Route exact path='/lecturer/:id' component={LecturerDetail} />
            <Route exact path='/lecturer/create' component={LecturerDetail} />
            <Route exact path='/courses' component={Course} />
            <Route exact path='/courses/:id' component={CourseDetail} />
            <Route exact path='/courses/create' component={CourseDetail} />
            <Route exact path='/students' component={Student} />
            <Route exact path='/students/:id' component={StudentDetail} />
            <Route exact path='/students/create' component={StudentDetail} />
        </Switch>
    )
}


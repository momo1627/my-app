import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch, Redirect, HashRouter as Router} from 'react-router-dom'
import Course from '../Course/CourseList'
import CourseDetail from '../Course/CourseDetail'
import Student from '../Students/StudentList'
const Home = () => {
    return <h1>Home</h1>
}

export default function App(){
    return (
        <Router>
            <Switch>
                <Redirect exact path='/' to="/home" />
                <Route exact path='/home' component={Home}/>
                <Route exact path='/courses' component={Course} />
                <Route exact path='/courses/:id' component={CourseDetail} />
                <Route exact path='/courses/create' component={CourseDetail} />
                <Route exact path='/students' component={Student} />
            </Switch>
        </Router>
    )
}

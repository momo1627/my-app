import React from 'react'
import {Link} from 'react-router-dom'
export default function Header(){
    return(
        <div>
            <Link to='/'>LMS</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}
import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
function Course({course}){
    return(
        <div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button><Link to={`courses/${course.id}`}>update</Link></button>
        </div>
    )
}
Course.propTypes = {
    course: PropTypes.object.isRequired
  };
export default Course
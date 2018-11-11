import React from 'react'
export default function TextArea({label,...other}){
    return(
        <div>
            {label !== undefined && <label>{label}</label> }
            <textarea id="" cols="30" rows="10" {...other}></textarea>
        </div>
    )
}
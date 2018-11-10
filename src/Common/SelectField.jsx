import React from 'react'
export default function SelectField({label,children,...other}){
    return(
        <div>
            {label !==undefined && <label>{label}</label>}
        <select {...other}> 
            {children}
        </select>
        </div>
        
    )
}
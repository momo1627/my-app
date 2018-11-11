import React from 'react'
export default function TextField({label,...other}){
    return(
        <div>
            { label !==undefined && <label>{label}</label>}
            <input type="text" {...other}/>
        </div>
    )
}

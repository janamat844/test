import React from 'react'
import './Input.css'

function Input(props) {
    return (
        <div>
            <h5 className="title">{props.title}</h5>
            <input type={props.type}/>
        </div>
    )
}

export default Input

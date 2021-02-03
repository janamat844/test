import React,{useContext} from 'react'
import {First_name} from './App'
import {Last_name} from './App'

function CompZ() {
    const fname=useContext(First_name);
    const lname=useContext(Last_name);
    
    return (
        <div>
            {fname}
            {lname}
        </div>

    )
}

export default CompZ

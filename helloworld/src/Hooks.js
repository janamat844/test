import React,{useState} from 'react'

function Hooks() {
    const[count,setCount]=useState(0)
    const[like,setLike]=useState('like')

    return (
        <div>
            <p>{count}</p>
            <button  onClick={() => 
            {
                if (count===0){
                    setCount(count+1)
                    setLike('like')
                }
                else if(count===1)
            {
                
                setLike('unlike')
            }    
            else 
            {
                
                setLike('like')
            }    
                }

            }>{like}</button>
        </div>
    )
}

export default Hooks

import React from 'react'

import './Preview.css'
import Header from './Header'


function Preview() {
    return (
        
        <div ClassName="sections">
         <Header/>   
            <div className="imgsection">
                <img className="image" src="/assets/img/1.jpg" alt=""/>
                <div className="one">
                    <p>Name</p>
                    <p>
                        <small>$</small>
                        <strong>100</strong>
                    </p>
                <div className="buttons">
                    <button>Addtocart</button>
                    <button>Save</button>
                </div>
                </div>
            </div>
                
        
            
        </div>
        
    )
}

export default Preview

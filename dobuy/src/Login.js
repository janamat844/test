import React from 'react'
import Header from './Header'
import './Login.css'
//import Modal from './Modal'
import Validform from './Validform'

function Login() {
    return (
        <div>
            <Header/>
  <div className="login">
            <div className="login_container">
            <h1>Sign In</h1>
            <form>
                <input title="Email" type="email"/> 
                <input title="Password" type="password"/>
                <br/>
                <button type="submit" className="login_signin">Sign in</button>
                <hr/>
                <p>I accept term and conditions</p>
            </form>
            </div>
        </div>
            
        </div>
        
    )
}

export default Login

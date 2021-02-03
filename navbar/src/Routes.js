import React from 'react'
//import Switch from 'react-bootstrap/esm/Switch'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Main from './Main'
import Home from './Home'
import App from './App'

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
        
            <Route path="/" exact component={App}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/main" exact component={Main}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes


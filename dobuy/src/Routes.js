import React from 'react'
import {BrowserRouter,Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './Login'
import Product from './Item'
import Home from './Home'
import Preview from './Preview'
import Form from './Form'
import Validform from './Validform'

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/product" exact component={Product}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/preview" exact component={Preview}/>
            <Route path="/form" exact component={Form}/>
            <Route path="/validform" exact component={Validform}/>
            
        </Switch>
        
        </BrowserRouter>
    )
}

export default Routes

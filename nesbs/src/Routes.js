import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Aboutus from './Aboutus'
import Home from './Home'

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/aboutus" exact component={Aboutus}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes

import React from 'react'
import {NavLink } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './Header.css'
function Header() {
    return (
        <div>
              <nav className="header">
              <NavLink activeClassName="logo_current" className="logo"><p>DoBuy</p></NavLink> 
            <div className="header_search">
                <input type="text" className="header_searchtext"/>
                <SearchIcon className="header_searchicon"/>
            </div>
            <div className="header_nav">
            <NavLink activeClassName="logo_current"  to="" className="header_NavLink">
            <div className="header_option">
                <span className="header_optionone" >Hello</span>
                <button type="button"   className="btn btn-primary" >
                    <NavLink to="#exampleModalLong" data-toggle="modal" data-target="#exampleModalLong">Signin</NavLink>
                
            </button>
            </div>
            </NavLink>
            <NavLink  activeClassName="logo_current" to="" className="header_NavLink">
            <div className="header_option">
                <span className="header_optionone">orders</span>
                <span className="header_optiontwo">Return</span>
            </div>
            </NavLink>
            </div>
            <NavLink activeClassName="logo_current"  to="" className="header_NavLink">
            <div className="header_basket">
                <NavLink to=''><ShoppingBasketIcon/></NavLink>
            </div>
            </NavLink>
        </nav>

        </div>
    )
}

export default Header

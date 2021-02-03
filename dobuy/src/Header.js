import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
import Input from './Input'
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
function Header() {
    return (
        <div>
        <nav className="header">
           <Link to='/home' className="logo"><p>DoBuy</p></Link> 
            <div className="header_search">
                <input type="text" className="header_searchtext"/>
                <SearchIcon className="header_searchicon"/>
            </div>
            <div className="header_nav">
            <Link to="/" className="header_link">
            <div className="header_option">
                <span className="header_optionone" >Hello</span>
                <button type="button"   className="btn btn-primary" >
                    <Link to="#exampleModalLong" data-toggle="modal" data-target="#exampleModalLong">Signin</Link>
                
            </button>
            </div>
            </Link>
            <Link to="/" className="header_link">
            <div className="header_option">
                <span className="header_optionone">orders</span>
                <span className="header_optiontwo">Return</span>
            </div>
            </Link>
            </div>
            <Link to="/checkout" className="header_link">
            <div className="header_basket">
                <Link to='/product'><ShoppingBasketIcon/></Link>
            </div>
            </Link>
        </nav>

<div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="modal-header">
    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<div className="login">
<div className="login_container">
<h1>Sign In</h1>
<form>
    <Input title="Email" type="email"/> 
    <Input title="Password" type="password"/>
    <br/>
    <button type="submit" className="login_signin">Sign in</button>
    <hr/>
    <p>I accept term and conditions</p>
</form>
</div>
</div>
</div>
<div class="modal-footer">
<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
<button type="button" className="btn btn-primary">Save changes</button>
</div>
</div>
</div>
</div>

</div>
    )
}

export default Header

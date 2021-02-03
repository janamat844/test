import React from 'react'
import './Photos.css'
import { Link } from 'react-router-dom'

function Photos() {
    return (
        <div>
            <h2 >Latest Products</h2>
            <div className="photosrow1">
                <div className="first">
                    <div className="ok">
                    <p className="heading">photo1</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>200</strong>
                    </p>
                    </div>
                   <Link className="zoom" to="/Preview"><img src="/assets/img/1.jpg" alt=""/></Link><br/>
                <button>Add to cart</button>
                </div>

                <div className="first">
                <div className="ok">
                    <p className="heading">photo1</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>200</strong>
                    </p>
                    </div>
                    <img className="zoom" src="/assets/img/1.jpg" alt=""/><br/>
                    <button>Add to cart</button>
                </div>

                <div className="first">
                <div className="ok">
                    <p className="heading">photo1</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>200</strong>
                    </p>
                    </div>
                    <img className="zoom" src="/assets/img/1.jpg" alt=""/><br/>
                    <button>Add to cart</button>
                 </div>
                 

                <div className="first">
                <div className="ok">
                     <p className="heading">photo1</p>
                     <p className="product_price">
                        <small>$</small>
                        <strong>200</strong>
                    </p>
                    </div>
                    <img className="zoom" src="/assets/img/1.jpg" alt=""/><br/>
                    <button>Add to cart</button>
                </div>
            </div>
        






            <h2 >Recomended</h2>
            <div className="photosrow2">
                <div className="first">
                <div className="ok">
                    <p className="heading">photo1</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>200</strong>
                     </p>
                     </div>
                    <img className="zoom" src="/assets/img/1.jpg" alt=""/><br/>
                <button>Add to cart</button>
                </div>

                <div className="first">
                <div className="ok">
                    <p className="heading">photo1</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>200</strong>
                    </p>
                    </div>
                    <img className="zoom" src="/assets/img/1.jpg" alt=""/><br/>
                 <button>Add to cart</button>
                </div>

                <div className="first">
                <div className="ok">
                    <p className="heading">photo1</p>
                    <p className="product_price">
                        <small>$</small>
                        <strong>200</strong>
                     </p>
                     </div>
                    <img className="zoom" src="/assets/img/1.jpg" alt=""/><br/>
                    <button>Add to cart</button>
                </div>

                <div className="first">
                <div className="ok">
                    <p className="heading">photo1</p>
                     <p className="product_price">
                        <small>$</small>
                        <strong>200</strong>
                    </p>
                    </div>
                    <img className="zoom" src="/assets/img/1.jpg" alt=""/><br/>
                    <button>Add to cart</button>
                 </div>
            </div>
        </div>
    )
}

export default Photos

import React from 'react'

function Product({id,title,image,price,rating}) {
    return (
        <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            
        </div>
        <img  src={image} alt=""/><br/>
        <button>Add To Cart</button>
        </div>
    )
}

export default Product

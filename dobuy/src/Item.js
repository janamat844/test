import Header from './Header';
import './Item.css'


function Item() {
   return (
      
      <div>
         <Header/>
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

export default Item

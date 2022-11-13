import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormater } from '../utilities/currencyFormatter'

const ShoppingCartproduct = ({product}) => {
    const { incrementQuantity, decrementQuantity, removeproduct } =useShoppingCart()

    return (
      <div className="shoppingcart-product">
          <div className="product-image">
            <img src={product.product.imageName} alt={product.product.name} />
          </div>
          <div className="product-info">
              <div className="product-info-name">{product.product.name}</div>
              <div className="product-info-quantity">
                  <div className="product-info-quantity-box">
                      <button className="box-button-left" onClick={() => decrementQuantity(product)}>-</button>
                      <span>{product.quantity}</span>
                      <button className="box-button-right" onClick={() => incrementQuantity(product)}>+</button>
                  </div>
              </div>
          </div>
          <div className="product-price">
              <div>{currencyFormater(product.product.price * product.quantity)}</div>
              <button onClick={() => removeproduct(product.articleNumber)}><i className="fa-solid fa-trash"></i></button>
          </div>                                                                    
      </div>
    )
}

export default ShoppingCartproduct
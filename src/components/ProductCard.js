import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormater } from '../utilities/currencyFormatter'

const ProductCard = ({product}) => {
  
    // const addToWishList = (e) => {
    //     console.log(`added to wish list`)
    // }

    // const addToCompare = (e) => {
    //     console.log("added to compare")
    // }

    // const addToCart = (e) => {
    //     console.log("added to shopping cart")
    // }
    const { incrementQuantity } = useShoppingCart()
  
    return (
    <div className="col">
        <div className="card">
        <div className="card-img">          
                <img src={product.imageName} alt={product.name} />
                <div className="card-menu d-xl-none">
                    <button  className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button  className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={() => incrementQuantity({articleNumber: product.articleNumber, product: product})} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none">
                    <span className="corner-left"></span>
                    <span className="corner-right"></span>
                    QUICK VIEW
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">{product.category}</p>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price">{currencyFormater(product.price)}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
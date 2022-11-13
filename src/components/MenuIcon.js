import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'


const MenuIcon = ({link, icon, quantity, hideOnMobile}) => {
  const { cartQuantity } = useShoppingCart()
  return (
    <NavLink className={`menu-icon ${hideOnMobile ? "d-none d-md-flex" : ""}`} to={link} end>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
        <i className={icon}></i>
    {/* // <button className="menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">      
    //  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{cartQuantity}</span>
    // <i className={icon}></i>
    //  </button>  */}
    </NavLink>
    
    
  )
}

export default MenuIcon
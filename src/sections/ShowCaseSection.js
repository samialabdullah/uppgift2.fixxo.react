import React from 'react'
import { NavLink } from 'react-router-dom'
import RightImage from '../assets/images/img-1.svg'
import LeftImage from '../assets/images/img-2.svg'

const ShowCase = () => {
  return (
    
    <section className="showcase">
      <div className="container-fluid">
        <img className="left-img" src={LeftImage} alt="showcase"/>
        <div className="showcase-body"> 
            <h2>SALE UP<br/>To 50% off</h2>
            <p>online shopping free home delivery over $100</p>
            <NavLink className="btn-theme">
              <span className="corner-left"></span>
              <span className="corner-right"></span>
              SHOP NOW
            </NavLink>
        </div>
        <img className="right-img" src={RightImage} alt="showcase"/>
      </div>
    </section>

    





  )
}

export default ShowCase
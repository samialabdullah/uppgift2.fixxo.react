import React from 'react'
import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'

const NotFoundView = () => {
  return (
    <>
       <MainMenuPart />
         <div className="container d-flex justify-content-center align-items-center" style={ { height: "500px" } }>
         <h1>404 - Page Not Found</h1>
       </div>
       <div style={{ position: "fixed", bottom: "0"}}>
         <FooterPart />
       </div>
     
    </>
  )
}

export default NotFoundView
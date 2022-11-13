import React, {useContext, useState} from 'react'
import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'
import ShowCasePart from '../Parts/ShowCasePart'
import ProductGridPart from '../Parts/ProductGridPart'
import { ProductContext } from '../contexts/contexts'
import BannersPart from '../Parts/BannersPart'
import CategoryRightPart from '../Parts/CategoryRightPart'
import CategoryLeftPart from '../Parts/CategoryLeftPart'
import CompanyServicePart from '../Parts/CompanyServicePart'
import CustomerService from "../assets/images/customer-service-icon.svg";
import CustomerSecurePayment from "../assets/images/secured-payment-icon.svg";
import CustomerDelivery from "../assets/images/delivery-truck-icon.svg";
import { FeaturedProductsContext, TopProductsContext, LeftProductsContext } from '../contexts/contexts'


const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  const products = useContext(FeaturedProductsContext)
  const topProducts = useContext(TopProductsContext) 
  const leftProducts = useContext(LeftProductsContext)
  

  return (
    <>
      
      <MainMenuPart />
      <ShowCasePart />
      <ProductGridPart  title="Featured Products" product={products}/>
      <BannersPart />
      <CategoryRightPart  product={topProducts}/>
      <CategoryLeftPart   product={leftProducts}/> 
      <div className='service-contacts container' >
      <CompanyServicePart companyicon={CustomerService} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      <CompanyServicePart companyicon={CustomerSecurePayment} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      <CompanyServicePart companyicon={CustomerDelivery} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      <CompanyServicePart companyicon={CustomerDelivery} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      </div>
      <FooterPart />
    </>
  )
}

export default HomeView
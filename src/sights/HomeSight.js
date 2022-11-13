import React, { useContext } from 'react'
import FooterPart from '../Parts/FooterPart'
import MainMenuPart from '../Parts/MainMenuPart'
import ShowCasePart from '../Parts/ShowCasePart'
import ProductGridPart from '../Parts/ProductGridPart'
import BannersPart from '../Parts/BannersPart'
import CategoryThreePart from '../Parts/CategoryThreePart'
import CategoryFourPart from '../Parts/CategoryFourPart'
import CompanyServicePart from '../Parts/CompanyServicePart'
import CustomerService from "../assets/images/customer-service.svg";
import CustomerSecurePayment from "../assets/images/secured-payment.svg";
import CustomerDelivery from "../assets/images/delivery-truck.svg";
import { FeaturedProductsContext, ThreeContext, FourContext } from '../contexts/ProductContexts'


const HomeSight = () => {
  window.top.document.title = 'Fixxo.'
  const products = useContext(FeaturedProductsContext)
  const ThreeProducts = useContext(ThreeContext) 
  const FourProducts = useContext(FourContext)
  

  return (
    <>
      
      <MainMenuPart />
      <ShowCasePart />
      <ProductGridPart  title="Featured Products" product={products}/>
      <BannersPart />
      <CategoryThreePart  product={ThreeProducts}/>
      <CategoryFourPart   product={FourProducts}/> 
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

export default HomeSight
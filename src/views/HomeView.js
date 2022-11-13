import React, {useContext, useState} from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ShowCaseSection from '../sections/ShowCaseSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'
import BannersSection from '../sections/BannersSection'
import CategoryRightSection from '../sections/CategoryRightSection'
import CategoryLeftSection from '../sections/CategoryLeftSection'
import CompanyServiceSection from '../sections/CompanyServiceSection'
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
      
      <MainMenuSection />
      <ShowCaseSection />
      <ProductGridSection  title="Featured Products" product={products}/>
      <BannersSection />
      <CategoryRightSection  product={topProducts}/>
      <CategoryLeftSection   product={leftProducts}/> 
      <div className='service-contacts container' >
      <CompanyServiceSection companyicon={CustomerService} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      <CompanyServiceSection companyicon={CustomerSecurePayment} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      <CompanyServiceSection companyicon={CustomerDelivery} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      <CompanyServiceSection companyicon={CustomerDelivery} servicetitle={"Customer Support"} serviceinfo={"Village did removed enjoyed explain talking."}/>
      </div>
      <FooterSection />
    </>
  )
}

export default HomeView
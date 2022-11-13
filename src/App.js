import React, {useEffect, useState } from 'react'
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

import HomeSight from './sights/HomeSight';
import CategoriesSight from './sights/CategoriesSight';
import ProductsSight from './sights/ProductsSight';
import ProductDetailsSight from './sights/ProductDetailsSight';
import ContactsSight from './sights/ContactsSight';
import SearchSight from './sights/SearchSight';
import CompareSight from './sights/CompareSight';
import WishListSight from './sights/WishListSight';
import ShoppingCartSight from './sights/ShoppingCartSight';
import NotFoundSight from './sights/NotFoundSight';
import { ProductContext, FeaturedProductsContext, ThreeContext, FourContext } from './contexts/ProductContexts';


function App() {
  
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [topProducts, setTopProducts] = useState([])
  const [leftProducts, setLeftProducts] = useState([])

  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    const fetchTopProductsData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setTopProducts(await result.json())
    }
    fetchTopProductsData()

    const fetchLeftProductsData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setLeftProducts(await result.json())
    }
    fetchLeftProductsData()

  }, [setProducts, setFeatured, setTopProducts, setLeftProducts])  



  return (
    <BrowserRouter>
    <ShoppingCartProvider>
      <ProductContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>
      <ThreeContext.Provider value={topProducts}>
      <FourContext.Provider value={leftProducts}>
      <Routes>
        <Route path="/" element={<HomeSight />} />
        <Route path="/categories" element={<CategoriesSight />} />
        <Route path="/products" element={<ProductsSight />} />
        <Route path="/products/:name" element={<ProductDetailsSight />} />
        <Route path="/contacts" element={<ContactsSight />} />
        <Route path="/search" element={<SearchSight />} />
        <Route path="/compare" element={<CompareSight />} />
        <Route path="/wishlist" element={<WishListSight />} />
        <Route path="/shoppingcart" element={<ShoppingCartSight />} />

        <Route path="*" element={<NotFoundSight />} />
      </Routes>
      </FourContext.Provider>
      </ThreeContext.Provider>
      </FeaturedProductsContext.Provider>
      </ProductContext.Provider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;

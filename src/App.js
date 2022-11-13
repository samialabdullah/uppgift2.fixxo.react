import React, {useEffect, useState } from 'react'
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import { ProductContext, FeaturedProductsContext, TopProductsContext, LeftProductsContext } from './contexts/contexts';


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
      <TopProductsContext.Provider value={topProducts}>
      <LeftProductsContext.Provider value={leftProducts}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </LeftProductsContext.Provider>
      </TopProductsContext.Provider>
      </FeaturedProductsContext.Provider>
      </ProductContext.Provider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;

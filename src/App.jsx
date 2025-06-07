import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Blog from './pages/blog';
import FAQSection from './components/askedqusetions';
import Technology from './pages/Technology';
import Aboutus from './pages/Aboutus';
import Careers from './pages/Careers';
import OrderPage from './pages/Orders';
import BlogDetails from './components/blogreadmore';
import SuccessPage from './pages/success';
import ProductDetailsPage from './subpages/prodctdetails';
import Products from './pages/products';
import Demo from './pages/demo';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/askedquestions" element={<FAQSection/>}/>
        <Route path='/Technology' element={<Technology/>}/>
        <Route path='Aboutus' element={<Aboutus/>}/>
        <Route path='/Careers' element={<Careers/>}/>
        <Route path='/orders' element={<OrderPage/>}/>
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;

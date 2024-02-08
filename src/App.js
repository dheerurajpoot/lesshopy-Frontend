import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from "./components/Layout"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Store from './pages/Store';
import Blogs from './pages/Blogs';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword'
import SingleBlog from './pages/SingleBlog';
import Faq from './pages/Faq';
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsCondition from './pages/TermsCondition';
import ShippingPolicy from './pages/ShippingPolicy'
import RefundPolicy from './pages/RefundPolicy';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout/>} >
          <Route index element = {<Home/>} />
          <Route path="about" element = {<About/>} />
          <Route path="contact" element = {<Contact/>} />
          <Route path="blogs" element = {<Blogs/>} />
          <Route path="blogpage" element = {<SingleBlog/>} />
          <Route path="store" element = {<Store/>} />
          <Route path="single-product" element = {<SingleProduct/>} />
          <Route path="wishlist" element = {<Wishlist/>} />
          <Route path="cart" element = {<Cart/>} />
          <Route path="checkout" element = {<Checkout/>} />
          <Route path="login" element = {<Login/>} />
          <Route path="signup" element = {<SignUp/>} />
          <Route path="forgot-password" element = {<ForgetPassword/>} />
          <Route path="help-center" element = {<Contact/>} />
          <Route path="privacy-policy" element = {<PrivacyPolicy/>} />
          <Route path="term-conditions" element = {<TermsCondition/>} />
          <Route path="shipping-policy" element = {<ShippingPolicy/>} />
          <Route path="refund-policy" element = {<RefundPolicy/>} />
          <Route path="faq" element = {<Faq/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";




export const Header = () => {
  return (
    <>
    <header className='header-top h-12 '>
      <div>
        <p>The Site is Under Maintainance and Products are not Available at the time.
        </p>
      </div>
      <div className='top-social'>
        <a href='https://lesshopy.com'>
          <FaFacebook />
        </a>
        <a href='https://lesshopy.com'>
        <FaSquareXTwitter />
        </a>
        <a href='https://lesshopy.com'>
        <FaInstagramSquare />
        </a>
        <a href='https://lesshopy.com'>
        <FaWhatsappSquare />
        </a>
      </div>
    </header>
    <header className='header-main h-28'>
      <div>
        <div>
          <Link to={"/"}>
            <img className='logo w-48' src='images/lesshopylogo.png' alt='Lesshopy logo'></img>
          </Link>
        </div>
      </div>
      <div className='main-search'>
        <div class="search-box relative text-gray-600">
          <input type="search" name="serch" placeholder="Search here" class="bg-white h-[48px] px-5 pr-10 md:w-[20rem] lg:w-[35rem] rounded-full text-sm focus:outline-none"/>
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
          <BsSearch className='text-[24px]' />
          </button>
        </div>
      </div>
      <div className='header-items flex justify-center items-center gap-8'>
        <div>
          <Link to={'/login'} className='flex justify-center items-center gap-2'>
              <img src='images/user.svg' alt='Login to Lesshopy'></img>
              <p>Log in <br/> My Account</p>
          </Link>
        </div>
        <div>
          <Link to='/wishlist' className='flex justify-center items-center gap-2'>
              <img src='images/wishlist.svg' alt='Lesshopy wishlist'></img>
              <p>Favorite <br/>Wishlist</p>
          </Link>
        </div>
        <div>
          <Link to={'/cart'} className='relative flex justify-center items-center gap-2'>
              <img src='images/cart.svg' alt='Login to Lesshopy'></img>
              <div>
                <span className='order-number bg-white px-3 rounded-xl'>0</span>
                <p>$500</p>
              </div>
          </Link>
        </div>
      </div>
    </header>
    <header className='header-bottom flex justify-around items-center text-white'>
      <div className='header-bottom-menu flex justify-center items-center gap-4 h-10'>
        <NavLink className='header-menu-items' to="/">Home</NavLink>
        <NavLink className='header-menu-items' to="/store">Our Store</NavLink>
        <NavLink className='header-menu-items' to="/blogs">Blogs</NavLink>
        <NavLink className='header-menu-items' to="/contact">Contact</NavLink>
        <NavLink className='header-menu-items' to="/about">About</NavLink>
      </div>
      <div className='bottom-privacy-menu flex gap-6'>
        <Link to="/help-center">Help Center</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </header>
    </>
  )
}

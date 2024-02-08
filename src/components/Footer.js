import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
      <div>
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:py-2 lg:px-8">
              <div className="px-6 py-6 md:px-12 lg:flex lg:items-center lg:px-16">
                    <div className="lg:flex-1 xl:w-0">
                        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Email Newsletter</h2>
                        <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">Sign up for our email newsletter to stay up
                            to date.</p>
                    </div>
                    <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                          <form className="sm:flex" id="revue-form" target="_blank">
                              <input type="email" autocomplete="email" required="" class="w-full rounded-md border-white text-black px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0" placeholder="Enter your email"/>
                              <button type="submit" id='news-btn' className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium text-white shadow focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Subscribe</button>
                          </form>
                            <p className="mt-3 text-sm text-indigo-200">We will never send any spam emails. Promise.</p>
                    </div>
              </div>
          </div>
      </div>
      </footer>
      <footer className='footer-menu flex items-center justify-around'>
        <div>
          <p>Contact Us</p>
          <div>
            <address className='mb-3'>Purana Shivli Road, Kalyanpur,<br/> Kanpur Nagar (208017)</address>
            <div className='mb-3'>
              <span>Mob : </span>
              <a href='tel: +91 9026315148'>+91 9026315148</a>
            </div>
            <div className='mb-3'>
              <span>Email : </span>
              <a href='mailto: rajpootdheeru90@gmail.com'>rajpootdheeru90@gmail.com</a>
            </div>
          </div>
        </div>
        <div>
          <p>Information</p>
          <div className='flex flex-col gap-4'>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
              <Link to={"/refund-policy"}>Refund Policy</Link>
              <Link to={"/shipping-policy"}>Shipping Policy</Link>
              <Link to={"/term-conditions"}>Term & Conditions</Link>
          </div>
        </div>
        <div>
          <p>Account</p>
          <div className='flex flex-col gap-4'>
              <Link to={"/login"}>My Account</Link>
              <Link to={"/wishlist"}>My Wishlist</Link>
              <Link to={"/cart"}>My Cart</Link>
              <Link to={"/store"}>Our Store</Link>
          </div>
        </div>
        <div>
          <p>Quick Links</p>
          <div className='flex flex-col gap-4'>
              <Link to={"/about"}>About</Link>
              <Link to={"/faq"}>FAQ</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/blogs"}>Blogs</Link>
          </div>
        </div>
        <div>
          <p>Our App</p>
          <div>
          <span>Available On :</span>
          <img className='mt-6 pb-8' src='images/playstore.png' alt='lesshopy payment'/>
        </div>
        </div>
      </footer>
      <footer className='h-28 flex justify-around items-center'>
        <div>
          <p className='mb-3'>Payment System :</p>
          <img src='images/payment.png' alt='lesshopy payment'/>
        </div>
        <div>
          <p className='mb-3'>Follow Us On :</p>
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
        </div>
      </footer>
      <footer className=' h-12 flex justify-center items-center'>
        <p className='copyright'>&copy; {new Date().getFullYear()} All Right Reserved</p>
      </footer>
    </>
  )
}

export default Footer


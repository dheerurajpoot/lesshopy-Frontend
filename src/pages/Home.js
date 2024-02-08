import React from 'react'
import Blogcard from '../components/Blogcard'
import ProductCard from '../components/ProductCard'
import ProductCardSecond from '../components/ProductCardSecond'
import CategoryMenu from '../components/CategoryMenu'
import MiniBanner from '../components/MiniBanner'
import MetaTitle from '../components/MetaTitle'
function Home() {
  return (
    <>
      <MetaTitle title ={"Home - Price Less, Quality Best"}/>
      <section className='main-container'>
          {/*  Categories menu Section Starts Here  */}

          <CategoryMenu/>

          {/* Main Banner Section Starts Here */}

          <section className='main-banner'>
            <div className='banner'>
              <img src='/images/banner2.jpeg' alt='main banner'/>
            </div>
            <div className='banner-mini'>
                <div>
                  <img src='images/home-banner1.jpeg' alt='banner'></img>
                </div>
                <div>
                  <img src='images/home-banner2.jpeg' alt='banner'></img>
                </div>
            </div>
          </section>

          {/* Branding Section Starts Here */}

          <section className='quality-section flex justify-center items-center gap-24 text-center my-12'>
            <div className='flex justify-center items-center flex-col'>
              <img src='images/delivery-quality.svg' alt='Quality'/>
              <p>Free Shipping</p>
              <span>Get Free Shipping Over ₹199 </span>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <img src='images/support-quality.svg' alt='Quality'/>
              <p>24/7 Support</p>
              <span>We provides 27/7 Customer Support.</span>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <img src='images/payment-quality.svg' alt='Quality'/>
              <p>Online Payment</p>
              <span>We have a Secure Payment Gateway.</span>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <img src='images/fastdelivery-quality.svg' alt='Quality'/>
              <p>Fast Delivery</p>
              <span>Superfast Delivery</span>
            </div>
          </section>

          {/* Featured Product Section Start Here  */}

          <section className='featured-collection rounded my-10 p-4' >
              <h2 className='text-[30px] my-3'>Featured Collection</h2>
              <div className='flex justify-center items-center '>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
              </div>
          </section>

          {/* Top Categories Section Starts Here  */}

          <section className='category-section my-10'>
            <h2 className='category-heading'>Top Categories</h2>
            <div className='top-categories flex justify-center items-center gap-10'>
              <div className='relative'>
                <img src='images/trousers.jpeg' alt='category'/>
                <h4>TROUSERS</h4>
              </div>
              <div className='relative'>
                <img src='images/t-shirts.jpeg' alt='category'/>
                <h4>T-SHIRTS</h4>
              </div>
              <div className='relative'>
                <img src='images/legging.jpeg' alt='category'/>
                <h4> LEGGING & PATIYALA</h4>
              </div>
              <div className='relative'>
                <img src='images/casual-shoes.jpeg' alt='category'/>
                <h4 >CASUAL SHOES</h4>
              </div>
              <div className='relative'>
                <img src='images/jwallery.jpeg' alt='category'/>
                <h4 >JEWELLERY</h4>
              </div>
            </div>
          </section>

          {/* Best Selling Products Section starts Here */}

          <section className='featured-collection rounded my-10 p-4' >
              <h2 className='text-[30px] my-3'>Best Selling Products</h2>
              <div className='flex justify-center items-center '>
                  <ProductCardSecond/>
                  <ProductCardSecond/>
                  <ProductCardSecond/>
                  <ProductCardSecond/>
                  <ProductCardSecond/>
              </div>
          </section>

          {/* Banner 4 section start here  */}

          <MiniBanner/>

          {/* blog Post Section Starts here  */}

          <section className='blog-card bg-white rounded my-10 p-4'>
             <h2 className='text-[30px] my-3'>Blogs</h2>
               <div className='flex justify-center items-center gap-6'>
                  <Blogcard/>
                  <Blogcard/>
                  <Blogcard/>
                  <Blogcard/>
               </div>
          </section>       

      </section>
    </>
  )
}

export default Home

import React from 'react'
import MetaTitle from '../components/MetaTitle'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import BreadCrumb from '../components/BreadCrumb'

const SingleProduct = () => {
  return (
    <>
    <MetaTitle title ={"Single Product"}/>
    <BreadCrumb title = "product/id"/>
    <section class="single-product py-20 overflow-hidden  font-poppins">
        <div class="max-w-6xl px-4 py-4 bg-white mx-auto lg:py-8 md:px-6">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4 md:w-1/2 ">
                    <div class="sticky top-0 z-50 overflow-hidden ">
                        <div class="relative mb-6 lg:mb-10 h-[450px]">
                            <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                alt="" class="object-contain w-full h-full "/>
                        </div>
                        <div class="flex-wrap hidden md:flex ">
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <Link class="block border border-blue-100 hover:border-blue-300 ">
                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                        alt="" class="object-cover w-full lg:h-32"/>
                                </Link>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <Link class="block border border-blue-100 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                        alt="" class="object-cover w-full lg:h-32"/>
                                </Link>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <Link  class="block border border-blue-100 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                        alt="" class="object-cover w-full lg:h-32"/>
                                </Link>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <Link class="block border border-blue-100 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                        alt="" class="object-cover w-full lg:h-32"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 ">
                    <div class="lg:pl-20">
                        <div class="pb-6 mb-8 border-b border-gray-200">
                            <span class="text-lg font-medium text-rose-500">New</span>
                            <h2 class="max-w-xl mt-2 mb-6 text-xl font-bold md:text-4xl">
                                Long-Sleeved T-shirt
                            </h2>
                            <div class="flex flex-wrap gap-4 items-center mb-6">
                                <ReactStars count={5} value='3' edit={false} size={20} activeColor="#FF504E"/>
                                <Link class="mb-4 text-xs underline lg:mb-0">
                                    Be the first to review the product
                                </Link>
                            </div>
                            <p class="max-w-md mb-8 text-gray-700">
                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                            </p>
                            <p class="inline-block text-2xl font-semibold text-gray-700 ">
                                <span>$994.00</span>
                                <span class="text-base font-normal text-gray-500 line-through">$1500.00</span>
                            </p>
                        </div>
                        <div class="mb-8">
                            <h2 class="mb-2 text-xl font-bold">
                                Color</h2>
                            <div class="flex flex-wrap -mb-2">
                                <button class="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400">
                                    <div class="w-6 h-6 bg-red-600 rounded-full"></div>
                                </button>
                                <button class="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400">
                                    <div class="w-6 h-6 bg-green-600 rounded-full"></div>
                                </button>
                                <button class="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400">
                                    <div class="w-6 h-6 bg-yellow-500 rounded-full"></div>
                                </button>
                                <button class="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400">
                                    <div class="w-6 h-6 rounded-full bg-sky-400"></div>
                                </button>
                            </div>
                        </div>
                        <div class="pb-6 mb-8 border-b border-gray-300">
                            <h2 class="mb-2 text-xl font-bold">
                                Size</h2>
                            <ul class="flex flex-wrap text-center -mb-2">
                                <li class="py-1 mb-2 mr-1 border w-11 hover:border-[#ff504e] hover:text-[#ff504e]">XL
                                </li>
                                <li class="py-1 mb-2 mr-1 border w-11 hover:border-[#ff504e] hover:text-[#ff504e]">S
                                </li>
                                <li class="py-1 mb-2 mr-1 border w-11 hover:border-[#ff504e] hover:text-[#ff504e]">M
                                </li>
                                <li class="py-1 mb-2 mr-1 border w-11 hover:border-[#ff504e] hover:text-[#ff504e]">XS
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-wrap items-center ">
                            <div class="mb-4 mr-4 lg:mb-0">
                                <div class="w-28">
                                    <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                        <button class="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer  hover:text-gray-7000 hover:bg-gray-300">
                                            <span class="m-auto text-2xl font-thin">-</span>
                                        </button>
                                        <input type="number" class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none focus:outline-none text-md hover:text-black"
                                            placeholder="1"/>
                                        <button class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                                            <span class="m-auto text-2xl font-thin">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4 mr-4 text-center lg:mb-0">
                                <Link to={'/cart'} class="w-full h-10 p-2 font-bold  mr-4 bg-[#ff504e] rounded-lg text-gray-50 hover:bg-blue-600">Buy Now</Link>
                            </div>
                            <div class="mb-4 mr-4 lg:mb-0">
                                <Link class="flex items-center justify-center w-10 md:w-full h-10 p-2 border border-gray-300 lg:w-11 bg-[#ff504e] rounded-lg hover:bg-blue-600 hover:border-blue-600">
                                    <img src='images/cart.svg' alt='cart'/>
                                </Link>
                            </div>
                            <div class="mb-4 lg:mb-0">
                                <Link class="flex items-center justify-center w-10 md:w-full h-10 p-2 border border-gray-300 lg:w-11 bg-[#ff504e] rounded-lg hover:bg-blue-600 hover:border-blue-600">
                                    <img src='images/wishlist.svg' alt='wishlist'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <section className='blog-comment max-w-6xl px-4 py-4 mb-10 bg-white mx-auto lg:py-8 md:px-6'>
                <form class="mb-6">
                  <h3 className='text-xl font-bold mb-3'> Write a review</h3>
                    <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                        <label for="comment" class="sr-only">Your comment</label>
                        <textarea id="comment" rows="6" class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none" placeholder="Write a review..." required></textarea>
                    </div>
                    <button type="submit" class="py-2.5 px-4 text-xs font-medium text-center text-white bg-[#FF504E] rounded-lg">Submit Review</button>
                </form>
          </section>
          <section className=' max-w-6xl px-4 py-4 mb-10 bg-white mx-auto lg:py-8 md:px-6' >
              <h2 className='text-[30px] font-bold my-3'>Recent Products</h2>
              <div className='recent-product flex justify-center items-center '>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
              </div>
          </section>
    </>
  )
}

export default SingleProduct

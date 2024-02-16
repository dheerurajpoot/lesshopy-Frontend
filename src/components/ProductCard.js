import React from 'react'
// import { FaCartPlus } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <>
      <div class="product-card relative m-2 flex md:w-full lg:w-full max-w-64 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <div>
              <Link>
                  <img className='absolute z-10 right-4 top-4 w-[20px]' src='images/wish.svg' alt='wishlist'/>
              </Link>
          </div>
          <Link to={'/single-product'}>
              <div class="mx-3 flex overflow-hidden rounded-xl">
                  <img class="object-cover" src="images/tab1.jpg" alt="Lesshopy" />
                  <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
              </div>
              <div class=" px-5">
                        <div>
                            <h5 class="lg:text-sm xl:text-base font-semibold tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                        </div>
                        <div class="flex items-center">
                            <div class=" flex items-center">
                                <ReactStars count={5} value='3' edit={false} size={20} activeColor="#FF504E"/>
                            </div>
                        </div>
                      <div class="mb-2 flex items-center justify-between">
                        <p>
                          <span class="lg:text-base xl:text-lg font-bold text-slate-900">$449</span>
                          <span class="text-sm text-slate-900 line-through">$699</span>
                        </p>
                      </div>
                    {/* <Link class="flex items-center justify-center rounded-md bg-[#FF504E] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#092143] focus:outline-none focus:ring-4 focus:ring-blue-300"><FaCartPlus className='mr-2'/>Add to cart
                    </Link> */}
              </div>
          </Link>
      </div>

    </>
  )
}

export default ProductCard

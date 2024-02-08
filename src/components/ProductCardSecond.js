import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCardSecond = () => {
  return (
    <>
      <div class="relative m-2 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-2xl">
            <div>
                <Link>
                    <img className='absolute right-4 top-4 w-[20px]' src='images/wish.svg' alt='wishlist'/>
                </Link>
            </div>
          <Link>
            <img class="h-60 rounded-t-lg object-cover ml-7" src="images/tab3.jpg" alt="product 2" />
          </Link>
            <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
          <div class="px-5 pb-3">
              <Link>
                <h5 class="text-base font-semibold tracking-tight text-slate-900">Nike Air MX Super 5000</h5>
              </Link>
              <div class="mb-2 flex items-center">
              <ReactStars count={5} value='3' edit={false} size={20} activeColor="#FF504E"/>
              </div>
              <div class="flex items-center justify-between">
                  <p>
                    <span class="text-lg font-bold text-slate-900">$249</span>
                    <span class="text-sm text-slate-900 line-through">$299</span>
                  </p>
                  <Link class="flex items-center rounded-md bg-[#FF504E] px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-[#092143] focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <FaCartPlus className='mr-2'/>Add to cart
                  </Link>
              </div>
          </div>
      </div>

    </>
  )
}

export default ProductCardSecond

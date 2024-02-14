import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import MetaTitle from '../components/MetaTitle'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import ProdutCard from '../components/ProductCard'

const Store = () => {
  return (
    <>
      <MetaTitle title ={"Our Store"}/>
      <BreadCrumb title = "ourstore"/>
      <div className='flex justify-center gap-4 mb-5'>
          <section className='store-sidebar w-[20%]'>
              <div className='bg-white m-3 mt-0 p-6'>
                  <h4 className='text-base font-bold mb-4'>Shop By Category</h4>
                  <div className='category-filter text-gray-500 text-sm'>
                    <ul>
                        <li>Fashion</li>
                        <li>Grocery</li>
                        <li>Electronics</li>
                        <li>Books</li>
                    </ul>
                  </div>
              </div>
              <div className='bg-white m-3 p-6'>
                  <h4 className='text-base font-bold mb-4'>Filter By</h4>
                  <div>
                      <div className='mb-6'>
                        <h5 className='text-[14px] font-bold mb-4'>Availablity</h5>
                        <div className='availablity'>
                          <input type="checkbox" id="stocks" name="stocks"/>
                          <label htmlFor="stocks">In Stock (1)</label>
                        </div>

                        <div className='availablity'>
                          <input type="checkbox" id="outofstocks" name="outofstocks" />
                          <label htmlFor="outofstocks">Out of Stocks (0)</label>
                        </div>
                      </div>
                      <div className='price-filter mb-6'>
                          <h5 className='text-[14px] font-bold mb-4'>Price</h5>
                          <div className='flex gap-4'>
                              <div>
                                <input type="number" id="price-from" name="price-from" placeholder='From' />
                              </div>
                              <div>
                                <input type="number" id="price-t0" name="price-to" placeholder='To'/>
                              </div>
                          </div>
                      </div>
                      <div className='mb-6'>
                        <h5 className='text-[14px] font-bold mb-4'>Color</h5>
                        <div className='color-filter'>
                            <ul className='flex flex-wrap gap-3 justify-start items-center'>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                      </div>
                      <div className='mb-6'>
                          <h5 className='text-[13px] font-bold mb-4'>Size</h5>
                          <div className='availablity'>
                              <input type="checkbox" id="size" name="size"/>
                              <label htmlFor="size">S (1)</label>
                          </div>
                          <div className='availablity'>
                              <input type="checkbox" id="size" name="size"/>
                              <label htmlFor="size">M (2)</label>
                          </div>
                          <div className='availablity'>
                              <input type="checkbox" id="size" name="size"/>
                              <label htmlFor="size">L (2)</label>
                          </div>
                          <div className='availablity'>
                              <input type="checkbox" id="size" name="size"/>
                              <label htmlFor="size">XL (3)</label>
                          </div>
                          <div className='availablity'>
                              <input type="checkbox" id="size" name="size"/>
                              <label htmlFor="size">XXL (4)</label>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='bg-white m-3 p-6'>
                  <h4 className='text-base font-bold mb-4'>Product Tags</h4>
                  <div className='flex justify-start flex-wrap items-center gap-2 text-gray-500'>
                    <span className='bg-gray-200 p-1 cursor-pointer rounded font-semibold text-xs'>Headphone</span>
                    <span className='bg-gray-200 p-1 cursor-pointer rounded font-semibold text-xs'>Mobile</span>
                    <span className='bg-gray-200 p-1 cursor-pointer rounded font-semibold text-xs'>Watch</span>
                    <span className='bg-gray-200 p-1 cursor-pointer rounded font-semibold text-xs'>Shoes</span>
                    <span className='bg-gray-200 p-1 cursor-pointer rounded font-semibold text-xs'>Laptops</span>
                    <span className='bg-gray-200 p-1 cursor-pointer rounded font-semibold text-xs'>T-Shirts</span>
                  </div>
              </div>
              <div className='bg-white m-3 p-6'>
                  <h4 className='text-base font-bold mb-4'>Random Products</h4>
                  <div class="relative m-2 p-2 ml-0 flex w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                        <Link class="mx-1 flex overflow-hidden rounded-xl">
                            <img class="object-cover w-32" src="images/tab1.jpg" alt="Lesshopy" />
                        </Link>
                    <div class=" px-2">
                              <Link>
                                  <h5 class="lg:text-xs xl:text-sm font-semibold tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                              </Link>
                              <div class="flex items-center">
                                  <div class=" flex items-center">
                                      <ReactStars count={5} value='3' edit={false} size={12} activeColor="#FF504E"/>
                                  </div>
                              </div>
                            <div class="mb-2 flex items-center justify-between">
                              <p>
                                <span class="text-sm font-bold text-slate-900">$449</span>
                                <span class="text-xs text-slate-900 line-through">$699</span>
                              </p>
                            </div>
                    </div>
                </div>
                  <div class="relative m-2 p-2 ml-0 flex w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                        <Link class="mx-1 flex overflow-hidden rounded-xl">
                            <img class="object-cover w-32" src="images/tab1.jpg" alt="Lesshopy" />
                        </Link>
                    <div class=" px-2">
                              <Link>
                                  <h5 class="lg:text-xs xl:text-sm font-semibold tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                              </Link>
                              <div class="flex items-center">
                                  <div class=" flex items-center">
                                      <ReactStars count={5} value='3' edit={false} size={12} activeColor="#FF504E"/>
                                  </div>
                              </div>
                            <div class="mb-2 flex items-center justify-between">
                              <p>
                                <span class="text-sm font-bold text-slate-900">$449</span>
                                <span class="text-xs text-slate-900 line-through">$699</span>
                              </p>
                            </div>
                    </div>
                </div>
                  <div class="relative m-2 p-2 ml-0 flex w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                        <Link class="mx-1 flex overflow-hidden rounded-xl">
                            <img class="object-cover w-32" src="images/tab1.jpg" alt="Lesshopy" />
                        </Link>
                    <div class=" px-2">
                              <Link>
                                  <h5 class="lg:text-xs xl:text-sm font-semibold tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                              </Link>
                              <div class="flex items-center">
                                  <div class=" flex items-center">
                                      <ReactStars count={5} value='3' edit={false} size={12} activeColor="#FF504E"/>
                                  </div>
                              </div>
                            <div class="mb-2 flex items-center justify-between">
                              <p>
                                <span class="text-sm font-bold text-slate-900">$449</span>
                                <span class="text-xs text-slate-900 line-through">$699</span>
                              </p>
                            </div>
                    </div>
                </div>
              </div>
          </section>
          <section className='w-[75%] bg-white flex justify-center flex-wrap items-start p-8'>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
              <ProdutCard/>
          </section>
      </div>
    </>
  )
}

export default Store

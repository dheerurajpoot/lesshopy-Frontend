import React from 'react'
import MetaTitle from '../components/MetaTitle'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <>
        <MetaTitle title ={"Checkour Order"}/>
      <section className='flex justify-center items-center'>
        <div class="bg-gray-100 w-[40%]">
            <div class=" mx-auto p-8">
                <div class="bg-white p-8 rounded-lg shadow-md border">
                    <h1 class="text-2xl font-bold text-gray-800 mb-4">Checkout</h1>
                    <div class="mb-6">
                        <h2 class="text-xl font-semibold text-gray-700 mb-2">Shipping Address</h2>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="first_name" class="block text-gray-700 mb-1">First Name</label>
                                <input type="text" id="first_name" class="w-full rounded-lg border py-2 px-3"/>
                            </div>
                            <div>
                                <label htmlFor= "last_name" class="block text-gray-700 mb-1">Last Name</label>
                                <input type="text" id="last_name" class="w-full rounded-lg border py-2 px-3"/>
                            </div>
                        </div>

                        <div class="mt-4">
                            <label for="address" class="block text-gray-700 mb-1">Address</label>
                            <input type="text" id="address" class="w-full rounded-lg border py-2 px-3"/>
                        </div>

                        <div class="mt-4">
                            <label for="city" class="block text-gray-700 mb-1">City</label>
                            <input type="text" id="city" class="w-full rounded-lg border py-2 px-3"/>
                        </div>

                        <div class="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label for="state" class="block text-gray-700 mb-1">State</label>
                                <input type="text" id="state" class="w-full rounded-lg border py-2 px-3"/>
                            </div>
                            <div>
                                <label for="zip" class="block text-gray-700 mb-1">ZIP Code</label>
                                <input type="text" id="zip" class="w-full rounded-lg border py-2 px-3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[40%] flex flex-wrap justify-between bg-white p-8 rounded-lg shadow-md border">
              <div class="px-4 mb-4 w-[100%]">
                  <div class="p-6 border border-blue-100 md:p-8">
                      <h2 class="mb-8 text-3xl font-bold text-gray-700">Order Summary</h2>
                      <div
                          class="flex items-center justify-between pb-4 mb-4 border-b border-gray-300">
                          <span class="text-gray-700">Subtotal</span>
                          <span class="text-xl font-bold text-gray-700">$100</span>
                      </div>
                      <div class="flex items-center justify-between pb-4 mb-4 ">
                          <span class="text-gray-700">Shipping</span>
                          <span class="text-xl font-bold text-gray-700">Free</span>
                      </div>
                      <div class="flex items-center justify-between pb-4 mb-4 ">
                          <span class="text-gray-700">Order Total</span>
                          <span class="text-xl font-bold text-gray-700">$99.00</span>
                      </div>
                      <h2 class="text-lg text-gray-500">We offer:</h2>
                      <div class="flex items-center gap-2 mb-4 ">
                          <Link>
                              <img src="images/payment.png" alt="" class="w-26"/>
                          </Link>
                      </div>
                      <div class="flex items-center justify-end ">
                          <Link to={'/'} class="block py-2.5 px-5 font-bold text-center text-gray-100 bg-[#ff504e] rounded-md hover:bg-[#092143]">Checkout</Link>
                      </div>
                  </div>
              </div>
        </div>
      </section>
    </>
  )
}

export default Checkout

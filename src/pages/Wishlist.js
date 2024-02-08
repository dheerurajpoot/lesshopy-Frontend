import React from 'react'
import { Link } from 'react-router-dom'
import MetaTitle from '../components/MetaTitle'

const Wishlist = () => {
  return (
    <>
      <MetaTitle title ={"Wishlist"}/>
      <section className='m-10 flex flex-wrap justify-start items-center gap-5'>
          <div className='wishlist-card relative bg-white flex flex-col justify-center items-center p-4 rounded-lg'>
              <div className='mb-2 '>
                  <img className='absolute top-3 right-3 w-4 cursor-pointer' src='images/cross.svg' alt='cross'/>
                  <Link>
                      <img src='images/speaker.jpg' alt='wishlist'/>
                  </Link>
              </div>
              <div>
                  <Link>
                      <h5 className='text-[13px] text-gray-700 font-semibold'>boAt Stone 352 Bluetooth Speaker with 10W RMS Stereo Sound</h5>
                  </Link>
                  <span className='text-[13px] text-[#ff504e]'>$100</span>
              </div>
          </div>
          <div className='wishlist-card relative bg-white flex flex-col justify-center items-center    p-4 rounded-lg'>
              <div className='mb-2 '>
                  <img className='absolute top-3 right-3 w-4 cursor-pointer' src='images/cross.svg' alt='cross'/>
                  <Link>
                      <img src='images/speaker.jpg' alt='wishlist'/>
                  </Link>
              </div>
              <div>
                    <Link>
                        <h5 className='text-[13px] text-gray-700 font-semibold'>boAt Stone 352 Bluetooth Speaker with 10W RMS Stereo Sound</h5>
                    </Link>
                    <span className='text-[13px] text-[#ff504e]'>$100</span>
              </div>
          </div>
          <div className='wishlist-card relative bg-white flex flex-col justify-center items-center    p-4 rounded-lg'>
              <div className='mb-2 '>
                  <img className='absolute top-3 right-3 w-4 cursor-pointer' src='images/cross.svg' alt='cross'/>
                  <Link>
                      <img src='images/speaker.jpg' alt='wishlist'/>
                  </Link>
              </div>
              <div>
                    <Link>
                        <h5 className='text-[13px] text-gray-700 font-semibold'>boAt Stone 352 Bluetooth Speaker with 10W RMS Stereo Sound</h5>
                    </Link>
                  <span className='text-[13px] text-[#ff504e]'>$100</span>
              </div>
          </div>
      </section>
    </>
  )
}

export default Wishlist

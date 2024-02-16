import React from 'react'
import { Link } from 'react-router-dom'

const Blogcard = () => {
  return (
        <div class="blog max-w-lg mx-auto">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">  
                    <Link>
                    <img class="rounded-t-lg" src="images/blog-1.jpg" alt=""/>
                    </Link>
                <div class="p-3 md:p-5 lg:p-5">
                    <Link>
                        <h5 class="text-gray-900 font-bold lg:text-lg xl:text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                    </Link>
                    <p className='my-2 text-gray-500 text-sm'>06 Feb 2024</p>
                    <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link to='/blogpage' class="text-white bg-[#FF504E] hover:bg-[#092143] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">Read more
                    </Link>
                </div>
            </div>
          </div>
  )
}

export default Blogcard

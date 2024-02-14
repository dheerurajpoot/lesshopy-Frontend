import React from 'react'

const MiniBanner = () => {
  return (
    <>
      <section className='mini-banner-section flex justify-center items-center gap-4 my-12'>
            <div>
              <img className='rounded-xl md:h-35 lg:h-38 xl:h-48' src='images/banner-face-cream.jpg' alt='beauty products'/>
            </div>
            <div>
              <img className='rounded-xl md:h-35 lg:h-38 xl:h-48' src='images/home-banner1.jpeg' alt='beauty products'/>
            </div>
            <div>
              <img className='rounded-xl md:h-35 lg:h-38 xl:h-48' src='images/banner-shampoo.jpg' alt='beauty products'/>
            </div>
            <div>
              <img className='rounded-xl md:h-35 lg:h-38 xl:h-48' src='images/home-banner2.jpeg' alt='beauty products'/>
            </div>
          </section>
    </>
  )
}

export default MiniBanner

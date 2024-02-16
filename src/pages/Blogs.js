import React from 'react'
import MetaTitle from '../components/MetaTitle'
import BlogCard from '../components/Blogcard'

const Blogs = () => {
  return (
    <>
      <MetaTitle title ={"Blogs"}/>
      <section className='flex gap-5 my-10 justify-center items-start'>
          <div className='w-[20%] blog-sidebar bg-white'>
              <div className='bg-white m-3 mt-0 p-6'>
                  <h4 className='text-base font-bold mb-4'>Find By Category</h4>
                  <div className='category-filter text-gray-500 text-sm'>
                    <ul>
                        <li>Phone Reivew</li>
                        <li>Laptop Review</li>
                        <li>Gaming Review</li>
                        <li>Camera Review</li>
                    </ul>
                  </div>
              </div>
          </div>
          <div className='blogpage w-[75%] bg-white flex justify-center flex-wrap items-start p-3 md:p-7 lg:p-8'>
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
          </div>
      </section>
    </>
  )
}

export default Blogs

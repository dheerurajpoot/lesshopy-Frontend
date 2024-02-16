import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import MetaTitle from '../components/MetaTitle'

const SingleBlog = () => {
  return (
    <>
      <MetaTitle title ={"Single Blog Post"}/>
      <BreadCrumb title = "single blog/id"/>
      <section className='flex gap-10 my-10 justify-center items-start'>
          <div className='single-blog w-[70%]'>
              <section class="mb-10 bg-white p-10">
                <img src="images/blog-1.jpg" class="mb-6 rounded-lg w-full shadow-lg" alt="blog post" />

                <div class="mb-6 flex items-center">
                  <img src="images/user.svg" class="mr-2 h-8 rounded-full bg-black" alt="avatar" />
                  <div>
                    <span> Published <u>10/02/2024</u> by </span>
                    <a href="#!" class="font-medium">Dheeru Rajpoot</a>
                  </div>
                </div>

                <h1 class="mb-6 text-3xl font-bold">
                  An intriguing title for an interesting article
                </h1>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
                  harum tempore cupiditate asperiores provident, itaque, quo ex iusto
                  rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
                  sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
                  soluta labore! Expedita quas, nesciunt similique autem, sunt,
                  doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
                  Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
                  ducimus consequatur corporis, architecto nesciunt vitae ipsum
                  consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus
                  similique eum vero in est velit quasi pariatur blanditiis incidunt
                  quam.
                </p>
              </section>
              <section className='blog-comment'>
                  <form class="mb-6">
                      <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                          <label for="comment" class="sr-only">Your comment</label>
                          <textarea id="comment" rows="6"
                              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                              placeholder="Write a comment..." required></textarea>
                      </div>
                      <button type="submit"
                          class="py-2.5 px-4 mx-3 text-xs font-medium text-center text-white bg-[#FF504E] rounded-lg">
                          Post comment
                      </button>
                  </form>
              </section>
          </div>
          <div className='single-blog-sidebar w-[20%] bg-white'>
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
      </section>
    </>
  )
}

export default SingleBlog

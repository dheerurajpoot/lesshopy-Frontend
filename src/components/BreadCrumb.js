import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
  const {title} = props;
  return (
    <>
       <div className='h-10 bg-white flex justify-center items-center mb-4'>
          <p>
            <Link to="/">
              home
            </Link>
            /{title}
          </p>
       </div>
    </>
  )
}

export default BreadCrumb

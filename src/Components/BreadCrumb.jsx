// Components/Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

const Breadcrumbs = ({ items }) => {
  return (
    <div className='mx-[20px] md:mx-[50px] mb-4 mt-[30px]'>
      <div className='flex items-center gap-2 text-sm md:text-base'>
        <Link to='/' className='hover:underline hover:text-gray-600'>
          Home
        </Link>
        {items && items.map((item, index) => (
          <React.Fragment key={index}>
            <BsChevronRight className='text-gray-400' />
            {item.link ? (
              <Link 
                to={item.link} 
                className='hover:underline hover:text-gray-600'
              >
                {item.label}
              </Link>
            ) : (
              <span className='text-gray-600'>{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
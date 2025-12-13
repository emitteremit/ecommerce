import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import BestsellersDetails from './PagesDetails'

const Bestsellers = () => {
  return (
    <div>
      <Header />
      <div className='bg-[#282828] overflow-hidden'>
        <div className='animate-marquee whitespace-nowrap'>
          <p className='text-white text-xl inline-block px-8 py-2'>
            FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
            * FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
            * FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
            * FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
            * FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
            * FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
          </p>
        </div>
      </div>
      <BestsellersDetails activeCategory="bestsellers" />;

      <Footer />
    </div>
  )
}

export default Bestsellers
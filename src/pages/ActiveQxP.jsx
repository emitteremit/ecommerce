import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PagesDetails from './PagesDetails'

const ActiveQxP = () => {
  return (
    <>
      <Header />
      {/* <Header /> */}
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

      <PagesDetails activeCategory="activeqx" />;
      <Footer />
    </>
  )
}

export default ActiveQxP  
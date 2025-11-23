import React from 'react'
import Header from '../Components/Header'
import Body from '../Components/Body'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <>
      <div className='bg-black overflow-hidden'>
        <div className='animate-marquee whitespace-nowrap'>
          <p className='text-white text-xl inline-block px-8 py-4'>
            FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
            * FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
            * FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
            * FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
            * FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
            * FREE SHIPPING ON ALL INTERNATIONAL ORDER OVER $35
          </p>
        </div>
      </div>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default Homepage
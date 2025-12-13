import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-[#282828] text-white mx-[10px] md:m-[50px] rounded-md p-8 lg:h-[auto] mt-[30px]'>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6'>
          <div className='lg:col-span-1'>
            <h1 className=' font-semi-bold text-[30px] mb-4 font-mono'>SHOP</h1>
            <div className='space-y-1 flex flex-col'>
              <Link>All products</Link>
              <Link>Best sellers</Link>
              <Link>Active QX</Link>
              <Link>Artisanal</Link>
              <Link>Kids</Link>
              <Link>About Us</Link>
            </div>
          </div>
          <div className='lg:col-span-1'>
            <h1 className=' font-semi-bold text-[30px] mb-4 font-mono'>POLICIES</h1>
            <ul className='space-y-1'>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
              <li>Accessibility Statement</li>
            </ul>
          </div>
          <div className='lg:col-span-1'>
            <h1 className=' font-semi-bold text-[30px] mb-4 font-mono'>CONTACT</h1>
            <ul className='space-y-1'>
              <li>500 Terry Francine St.</li>
              <li>San Francisco, CA 94158</li>
              <li>123-456-7890</li>
              <li>info@mysite.com</li>
            </ul>
          </div>
          <div className='lg:col-span-1'>
            <h1 className=' font-semi-bold text-[30px] mb-4 font-mono'>SOCIAL</h1>
            <div className='space-y-1 flex flex-col'>
              <Link>Instagram</Link>
              <Link>Facebook</Link>
              <Link>X</Link>
              <Link>Tiktok</Link>
            </div>
          </div>
          <div className='lg:col-span-2 col-span-2 md:col-span-2 mt-[20px] lg:mt-0'>
            <h1 className=' font-semi-bold text-[30px] mb-4 font-mono'>STAY IN THE LOOP</h1>
            <p className='mb-4'>Sign up to receive updates and special offers</p>
            <input type="email" placeholder='Email Address*' className='bg-[#282828] border-white border-b focus:outline-none w-full mb-4' />
            <div className='flex items-center gap-3 mb-4'>
              <input type="checkbox" className='accent-white border-1 outline-none' />
              <p>Yes, subscribe me to your newsletter.*</p>
            </div>
            <button className='font-semibold font-mono bg-blue-700 text-white w-full py-1 rounded-md hover:bg-blue-800 transition-colors'>
              SIGN UP
            </button>
          </div>
        </div>
        <div className='flex justify-between items-center pt-4 mt-[70px] mb-[20px]'>
          <h1 className='text font-bold text-[70px] font-Madefor hidden md:inline-block'>QUENX</h1>
          <p className='hidden md:inline-block'>&copy; 2025 by QUNEX</p>
        </div>
        <h1 className='text font-bold text-[80px] font-mono inline-block md:hidden'>QUENX</h1>
      </div>
    </>
  )
}

export default Footer
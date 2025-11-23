import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import { PiLockKeyThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      
      <div className='flex justify-between items-center px-8 py-5'>
        <div>
          <p className='font-bold text-[40px] font-mono'>QUENX</p>
        </div>
        <div className='hidden lg:flex gap-8'>
          <Link className='hover:underline font-semibold'>Shop All</Link>
          <Link className='hover:underline font-semibold'>Best Sellers</Link>
          <Link className='hover:underline font-semibold'>Active QX</Link>
          <Link className='hover:underline font-semibold'>Artisanal</Link>
          <Link className='hover:underline font-semibold'>Kids</Link>
          <Link className='hover:underline font-semibold'>About Us</Link>
        </div>
        <div className='flex items-center gap-3'>
          <form className="max-w-md mx-auto hidden md:block">
            <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
              </div>
              <input type="search" id="search" className="block w-full py-2 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-[10px]" placeholder="Search" required />
            </div>
          </form>
          <div className='flex justify-between items-center gap-2 md:gap-3'>
            <Link>Log in</Link>
            <Link>
              <MdAccountCircle size={'32px'} />
            </Link>
            <Link>
              <BsHeart size={'20px'} />
            </Link>
            <Link>
              <PiLockKeyThin size={'32px'} />
            </Link>
            <label htmlFor="offcanvas-toggle" className="cursor-pointer lg:hidden">
              <svg xmlns="" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <input type="checkbox" id="offcanvas-toggle" className="hidden peer" />

        <div className="fixed top-0 right-0 z-40 w-full h-screen p-4 bg-white border-l border-gray-200 dark:border-gray-700 dark:bg-gray-800 transform translate-x-full transition-transform duration-300 peer-checked:translate-x-0">
          <label className="flex justify-end mb-4 cursor-pointer text-white" htmlFor="offcanvas-toggle">
            <svg xmlns="" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
          <div className='flex items-center mb-8 gap-2'>
            <MdAccountCircle size={'32px'} className='text-white' />
            <Link className='text-xl text-white'>Log in</Link>
          </div>
          <div className='flex flex-col gap-6 text-white'>
            <Link className='hover:underline font-semibold'>Shop All</Link>
            <Link className='hover:underline font-semibold'>Best Sellers</Link>
            <Link className='hover:underline font-semibold'>Active QX</Link>
            <Link className='hover:underline font-semibold'>Artisanal</Link>
            <Link className='hover:underline font-semibold'>Kids</Link>
            <Link className='hover:underline font-semibold'>About Us</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
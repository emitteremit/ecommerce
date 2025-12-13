import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import img1 from '../assets/sneakers7.jpg'
import img2 from '../assets/sneakers&Sub.jpg'
import { Link } from 'react-router-dom'
import ProductDetails from '../Components/ProductDetails'
import BreadCrumbs from '../Components/BreadCrumbs'

const SignalDL = () => {
    const images = [img1, img2];
    const productName = 'Signal DL';
    const price = 64.00;
    const originalPrice = 80.00;
    const breadcrumbItems = [
        { label: 'All Products', link: '/shopall' }, // Category page
        { label: 'Artisanal', link: '/artisanal' }, // Category page
        { label: 'Signal DL', link: null } // Current product (no link)
    ];
  return (
    <>
    <Header/>
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
            <BreadCrumbs items={breadcrumbItems}/>
            <div>
                <ProductDetails
                images={images}
                productName={productName}
                price={price}
                originalPrice={originalPrice}/>
            </div>
    <Footer/>
    </>
  )
}

export default SignalDL
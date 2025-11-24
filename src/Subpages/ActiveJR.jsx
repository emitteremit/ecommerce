import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import img1 from '../assets/sneakers1.jpg';
import img2 from '../assets/snekers1sub.jpg';
import ProductDetails from '../Components/ProductDetails'

const ActiveJR = () => {
    const images = [img1, img2];
    const productName = 'Active JR';
    const price = 64.00;
    const originalPrice = 80.00;
    return (
        <>
            <Header />
            <div className='bg-black overflow-hidden'>
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
            <div className='mx-[50px] mb-[20px] mt-[50px]'>
                <Link to='/' className='hover:underline'>Home</Link> / <Link to='/activejr' className='hover:underline'>ActiveJR</Link>
            </div>
            <div>
                <ProductDetails
                images={images}
                productName={productName}
                price={price}
                originalPrice={originalPrice}/>
            </div>
            <Footer />
        </>
    )
}

export default ActiveJR
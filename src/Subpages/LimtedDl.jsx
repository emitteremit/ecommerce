import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductDetails from '../Components/ProductDetails'
import { Link } from 'react-router-dom'
import img1 from '../assets/sneakers5.jpg';
import img2 from '../assets/sneakers5sub.jpg';

const LimtedDl = () => {
    const images = [img1, img2];
    const productName = 'Limited DL';
    const price = 119.00;
    const originalPrice = 129.00;
  return (
    <>
        <Header/>
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
                <Link to='/' className='hover:underline'>Home</Link> / <Link to='/limiteddl' className='hover:underline'>Limited-DL</Link>
            </div>
        <ProductDetails
                images={images}
                productName={productName}
                price={price}
                originalPrice={originalPrice}
            />
        <Footer/>
    </>
  )
}

export default LimtedDl
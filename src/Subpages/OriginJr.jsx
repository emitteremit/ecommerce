import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductDetails from '../Components/ProductDetails'
import Breadcrumbs from '../Components/Breadcrumb'
import img1 from '../assets/sneakers12.jpg';
import img2 from '../assets/sneakers12Sub.jpg';

const OriginJr = () => {
    const images = [img1, img2];
    const productName = 'Origin JR';
    const price = 64.00;
    const originalPrice = 80.00;

    const breadcrumbItems = [
        { label: 'All Product', link: '/shopall' },
        { label: 'Kids', link: '/kids' },
        { label: 'Origin JR', link: null }
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
                    </p>
                </div>
            </div>

            {/* Breadcrumb */}
            <Breadcrumbs items={breadcrumbItems} />

            <div>
                <ProductDetails
                    id={1}
                    images={images}
                    productName={productName}
                    price={price}
                    originalPrice={originalPrice}
                />
            </div>
   <Footer/>
   </>
  )
}

export default OriginJr
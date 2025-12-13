import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductDetails from '../Components/ProductDetails';
import img1 from '../assets/sneakers13.jpg';
import img2 from '../assets/sneakers13sub.jpg';
import BreadCrumbs from '../Components/BreadCrumbs';

const ClassicJr = () => {
    const images = [img1, img2];
    const productName = 'Classic JR';
    const price = 64.00;
    const originalPrice = 80.00;

    // Breadcrumb trail - shows where this product came from
    const breadcrumbItems = [
        { label: 'All Products', link: '/shopall' }, // Category page
        { label: 'Kids', link: '/kids' }, // Category page
        { label: 'Classic JR', link: null } // Current product (no link)
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
            <BreadCrumbs items={breadcrumbItems} />

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

export default ClassicJr
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Breadcrumbs from '../Components/Breadcrumb'
import ProductDetails from '../Components/ProductDetails'
import img1 from '../assets/sneakers6.jpg';
import img2 from '../assets/sneakers6Sub.jpg';

const BioBasic = () => {
    const images = [img1, img2];
    const productName = 'Bio Basic';
    const price = 64.00;
    const originalPrice = 80.00;

    // Breadcrumb trail - shows where this product came from
    const breadcrumbItems = [
        { label: 'All Product', link: '/shopall' }, // Category page
        { label: 'Active Qx', link: '/activeqxp' }, // Category page
        { label: 'Bio Basic', link: null } // Current product (no link)
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

export default BioBasic
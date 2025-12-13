import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import img1 from '../assets/sneakers4.jpg';
import img2 from '../assets/sneakers4sub.jpg';

import ProductDetails from '../Components/ProductDetails';
import BreadCrumbs from '../Components/BreadCrumbs';

const Bioperform = () => {
    const images = [img1, img2];
    const productName = 'Bio-Perform';
    const price = 99.00;
    const originalPrice = 119.00;
    const breadcrumbItems = [
        { label: 'All products', link: '/shopall' }, // Category page
        { label: 'Active Qx', link: '/activeqxp' }, 
        { label: 'Best Seller', link: '/bestSellers' }, // Category page
        { label: 'Bio Perform', link: null } // Current product (no link)
    ];
    return (
        <>
            <Header />
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
            <ProductDetails
                images={images}
                productName={productName}
                price={price}
                originalPrice={originalPrice}
            />
            <Footer />
        </>
    )
}

export default Bioperform
// BioRunner.js
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import img1 from '../assets/sneakers1.jpg';
import img2 from '../assets/snekers1sub.jpg';
import ProductDetails from '../Components/ProductDetails';
import BreadCrumbs from '../Components/BreadCrumbs';


const BioRunner = () => {
    const images = [img1, img2];
    const productName = 'Bio Runner';
    const price = 99.00;
    const originalPrice = 119.00;

    const breadcrumbItems = [
        { label: 'All Products', link: '/shopall' }, // Category page
        { label: 'Active Qx', link: '/activeqxp' }, // Category page
        { label: 'Bio Runner', link: null } // Current product (no link)
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
    );
};

export default BioRunner;
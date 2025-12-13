import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProductDetails from '../Components/ProductDetails'
import img1 from '../assets/sneakers5.jpg';
import img2 from '../assets/sneakers5sub.jpg';
import BreadCrumbs from '../Components/BreadCrumbs';

const LimtedDl = () => {
    const images = [img1, img2];
    const productName = 'Limited DL';
    const price = 119.00;
    const originalPrice = 129.00;
    const breadcrumbItems = [
        { label: 'All Products', link: '/shopall' }, 
        { label: 'Artisanal', link: '/artisanal' },
        { label: 'Best Seller', link: '/bestSellers' },  // Category page
        { label: 'Limited DL', link: null } // Current product (no link)
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
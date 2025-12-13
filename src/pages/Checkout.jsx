import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import { useCart } from '../Components/CartContext';
import BreadCrumbs from '../Components/BreadCrumbs';

const Checkout = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const breadcrumbItems = [
        { label: 'Cart', link: '/cartpage' },
        { label: 'paymentgateway', link: null }
    ];
    return (
        <>
            <Header />
            <BreadCrumbs items={breadcrumbItems} />
            <div className='bg-[#F0F0F0] w-[100%] max-w-[700px] h-[100%] max-h-[500px] rounded-lg shadow md:mx-auto mx-[10px]'>
                <div className='space-y-3 mb-4 p-5'>
                    <div className='flex justify-between'>
                        <span>Subtotal</span>
                        <span>${getCartTotal()}.00</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className='border-t pt-3 flex justify-between font-bold text-lg'>
                        <span>Total</span>
                        <span>${getCartTotal()}.00</span>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout
// CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Components/CartContext';
import Header from '../Components/Header';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center px-4'>
                <h1 className='text-3xl font-bold mb-4'>Your Cart is Empty</h1>
                <p className='text-gray-600 mb-6'>Add some items to get started!</p>
                <Link
                    to='/shopall'
                    className='bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition-colors'
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className='container mx-auto px-4 py-8'>
                <h1 className='text-4xl font-bold mb-8'>Shopping Cart</h1>

                <div className='grid md:grid-cols-3 gap-8'>
                    {/* Cart Items */}
                    <div className='md:col-span-2'>
                        <div className='bg-white rounded-lg shadow'>
                            {cartItems.map((item) => (
                                <div
                                    key={item.cartId}
                                    className='flex gap-4 p-4 border-b last:border-b-0'
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='w-24 h-24 object-cover rounded'
                                    />
                                    <div className='flex-1'>
                                        <h3 className='font-semibold text-lg mb-2'>{item.name}</h3>
                                        <p className='text-gray-600 mb-2'>
                                            ${item.price}.00
                                        </p>
                                        <div className='flex items-center gap-3'>
                                            <div className='flex items-center border border-gray-300 rounded'>
                                                <button
                                                    onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                                                    className='px-3 py-1 hover:bg-gray-100'
                                                >
                                                    -
                                                </button>
                                                <span className='px-4 py-1 border-x'>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                                                    className='px-3 py-1 hover:bg-gray-100'
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.cartId)}
                                                className='text-red-500 hover:text-red-700 text-sm'
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <p className='font-bold text-lg'>
                                            ${item.price * item.quantity}.00
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={clearCart}
                            className='mt-4 text-red-500 hover:text-red-700 text-sm'
                        >
                            Clear Cart
                        </button>
                    </div>

                    {/* Cart Summary */}
                    <div className='md:col-span-1'>
                        <div className='bg-white rounded-lg shadow p-6 sticky top-4'>
                            <h2 className='text-2xl font-bold mb-4'>Order Summary</h2>

                            <div className='space-y-3 mb-4'>
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
                            </div>

                            <Link 
                            to={'/checkout'} className='block w-full text-center bg-blue-600 text-gray-800 py-3 rounded hover:bg-gray-300 transition-colors mb-3'>
                                Proceed to Checkout
                            </Link>

                            <Link
                                to='/'
                                className='block w-full text-center bg-gray-200 text-gray-800 py-3 rounded hover:bg-gray-300 transition-colors'
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
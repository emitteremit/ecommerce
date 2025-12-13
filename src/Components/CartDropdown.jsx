// CartDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className='fixed inset-0 bg-black bg-opacity-50 z-40'
        onClick={() => setIsCartOpen(false)}
      />

      {/* Dropdown Cart */}
      <div className='fixed top-0 right-0 w-full md:w-[400px] h-full bg-white shadow-lg z-50 flex flex-col'>
        {/* Header */}
        <div className='flex items-center justify-between p-4 border-b'>
          <h2 className='text-xl font-semibold'>Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className='text-2xl hover:text-gray-600'
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className='flex-1 overflow-y-auto p-4'>
          {cartItems.length === 0 ? (
            <div className='text-center py-10'>
              <p className='text-gray-500'>Your cart is empty</p>
            </div>
          ) : (
            <div className='space-y-4'>
              {cartItems.map((item) => (
                <div key={item.id} className='flex gap-4 border-b pb-4'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-20 h-20 object-cover rounded'
                  />
                  <div className='flex-1'>
                    <h3 className='font-medium text-sm'>{item.name}</h3>
                    <p className='text-sm text-gray-600'>
                      ${item.price}.00 × {item.quantity}
                    </p>
                    <p className='text-sm font-semibold mt-1'>
                      ${item.price * item.quantity}.00
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className='text-red-500 hover:text-red-700 text-sm'
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className='border-t p-4'>
            <div className='flex items-center justify-between mb-4'>
              <span className='text-lg font-semibold'>Total:</span>
              <span className='text-xl font-bold'>${getCartTotal()}.00</span>
            </div>
            <Link
              to='/cart'
              onClick={() => setIsCartOpen(false)}
              className='block w-full bg-blue-700 text-white text-center py-3 rounded hover:bg-blue-800 transition-colors'
            >
              View Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropdown;
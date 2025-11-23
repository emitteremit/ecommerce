// ProductDetails.js
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaPinterest, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ProductDetails = ({ images, productName, price, originalPrice }) => {
    const [quantity, setQuantity] = useState(1);
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [imageIndex, setImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    useEffect(() => {
        setCurrentImage(images[imageIndex]);
    }, [imageIndex, images]);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 mx-[70px] gap-4 lg:gap-9'>
            <div className='flex gap-3'>
                <div>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={productName}
                            className='lg:w-[100px] lg:h-[50px] cursor-pointer mb-2'
                            onClick={() => setCurrentImage(image)}
                        />
                    ))}
                </div>
                <div className='relative w-[900px]'>
                    <img
                        src={currentImage}
                        alt={productName}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
            </div>
            <div>
                <h1 className='text-[40px] font-semibold font-mono mb-2'>{productName}</h1>
                <p className='text-lg mb-4'>
                    <strike>${originalPrice}</strike> ${price}
                </p>
                <div className='flex items-center gap-5 border border-black py-2 px-5 w-fit'>
                    <button
                        onClick={handleDecrement}
                        className='text-xl hover:bg-gray-200 px-2 rounded'
                    >
                        -
                    </button>
                    <p className='text-lg'>{quantity}</p>
                    <button
                        onClick={handleIncrement}
                        className='text-xl hover:bg-gray-200 px-2 rounded'
                    >
                        +
                    </button>
                </div>
                <div className='flex gap-2 mt-4'>
                    <button className='bg-blue-700 text-white px-[60px] py-[20px]  rounded-sm hover:bg-blue-800 transition-colors'>
                        Add to Cart
                    </button>
                    <button className='bg-gray-800 text-white px-[60px] py-[20px]  rounded-sm hover:bg-gray-700 transition-colors'>
                        Buy now
                    </button>
                </div>
                    <div className='flex mt-[50px]  gap-5'>

                        <FaWhatsapp  size={'30px'}/>
                        <FaFacebook  size={'30px'}/>
                        <FaPinterest  size={'30px'}/>
                        <FaTwitter size={'30px'} />
                    </div>
            </div>
        </div>
    );
};

export default ProductDetails;
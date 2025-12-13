import React, { useState, useEffect } from 'react';
import { FaFacebook, FaPinterest, FaTwitter, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { BsHeart } from 'react-icons/bs';

const ProductDetails = ({ id, images, productName, price, originalPrice }) => {
    const [quantity, setQuantity] = useState(1);
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [imageIndex, setImageIndex] = useState(0);

    const { addToCart } = useCart();

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart({
            id,
            name: productName,
            price,
            originalPrice,
            image: images[0],
            quantity,
        });
    };

    const handlePrevImage = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        setCurrentImage(images[imageIndex]);
    }, [imageIndex, images]);

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 mx-[20px] md:mx-[70px] gap-4 lg:gap-9'>
            <div className='flex gap-3'>
                <div className='hidden md:block'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={productName}
                            className='md:w-[100px] md:h-[60px] cursor-pointer mb-2'
                            onClick={() => setImageIndex(index)}
                        />
                    ))}
                </div>
                <div className='relative w-[900px]'>
                    <img
                        src={currentImage}
                        alt={productName}
                        className='w-full lg:h-[500px] h-full object-cover'
                    />
                    <button
                        onClick={handlePrevImage}
                        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-1'
                    >
                        <FaChevronLeft size={'16px'} />
                    </button>
                    <button
                        onClick={handleNextImage}
                        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1'
                    >
                        <FaChevronRight size={'16px'} />
                    </button>
                </div>
            </div>
            <div>
                <h1 className='text-[40px] font-semibold font-mono mb-2'>{productName}</h1>
                <p className='text-lg mb-4'>
                    <strike>${originalPrice}.00</strike> ${price * quantity}.00
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
                <div className='flex flex-col md:flex-row gap-2 mt-4'>
                    <button 
                        onClick={handleAddToCart}
                        className='bg-blue-700 text-white w-full py-[20px] lg:py-[20px] md:py-[0px] md:px-[50px] rounded-[3px] hover:bg-blue-800 transition-colors'
                    >
                        Add to Cart
                    </button>
                    <button className='bg-gray-800 text-white w-full py-[20px] rounded-[3px] hover:bg-gray-700 transition-colors'>
                        Buy now
                    </button>
                </div>
                    <button className='border border-blue-700 w-full mt-[20px] py-[20px] rounded-sm flex justify-center'>
                    <BsHeart size={'20px'} className='text-blue-700'/>
                    </button>
                <div className='flex mt-[50px] gap-3'>
                    <Link>
                        <FaWhatsapp size={'16px'} />
                    </Link>
                    <Link>
                        <FaFacebook size={'16px'} />
                    </Link>
                    <Link>
                        <FaPinterest size={'16px'} />
                    </Link>
                    <Link>
                        <FaTwitter size={'16px'} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
import React, { useEffect } from 'react';
import img1 from '../assets/hero.jpg';
import img2 from '../assets/sneakers2.jpg';
import img3 from '../assets/sneakers3.jpg'
import img4 from '../assets/sneakers4.jpg'
import img5 from '../assets/sneakers5.jpg'
import img6 from '../assets/Kids.jpg'
import img7 from '../assets/img7.png'
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Aos from 'aos';

const Body = () => {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1000,
    });
  }, []);

  const bestSellers = [
    {
      id: 1,
      name: 'Active JR',
      image: img2,
      originalPrice: '80.00',
      salePrice: '64.00',
      link:'/activejr'
    },
    {
      id: 2,
      name: 'Bio original',
      image: img3,
      originalPrice: '119.00',
      salePrice: '109.00',
      link:'/biooriginal'
    },
    {
      id: 3,
      name: 'Bio perform',
      image: img4,
      originalPrice: '119.00',
      salePrice: '99.00',
      link:'/bioperform'
    },
    {
      id: 4,
      name: 'limited DL',
      image: img5,
      originalPrice: '129.00',
      salePrice: '119.00',
      link:'/limitedDl'
    },
  ];
  const Shopcollection = [
    {
      id: 1,
      image: img3,
      name: 'ACTIVE QX'
    },
    {
      id: 2,
      image: img2,
      name: 'KIDS'
    },
    {
      id: 3,
      image: img5,
      name: 'ARTISANAL'
    }
  ];
  const saying = [
    {
      id: 1,
      titles: '"Eco-Friendly and Stylish"',
      subtitle: '"Absolute love the Quality of the shoes! super comfy, stylish, and they arrived right on time will defintely be buying again"',
      image: img1,
      imageName: '-Sarah M',
    },
    {
      id: 2,
      titles: '"Ideal for Active Lifestyles"',
      subtitle: '"these shoes exceeded my expectation. great fit and the materials feels Premium. got so many compliments already"',
      image: img1,
      imageName: '-Daniel K',
    },
    {
      id: 3,
      titles: '"My New Daily Essential"',
      subtitle: '"fast delivery and excellent customer services. the shoes are exactly as shown and feel amazing on my feet!"',
      image: img1,
      imageName: '-Jessica L',
    }
  ]
  return (
    <>
      <div className='md:mx-[50px] mx-[20px] relative'>
        <img src={img1} alt="" className='rounded-[20px] md:h-[600px] h-[500px] w-full object-cover' />
        <div className='absolute top-0 left-0 p-4 md:p-8 grid grid-cols-1 md:grid-cols-2'>
          <div className='space-y-0'>
            <p className='text-[50px] md:text-[50px] lg:text-[70px] font-bold leading-[1]'>WALKING WITH PURPOSE.</p>
            <p className='text-xl md:text-2xl font-semibold mt-[-10px]'>Premium Vegan Sneakers</p>
          </div>
        </div>
        <Link to='/biorunner' className='hidden sm:block absolute top-[50px] md:top-[50px] right-0 p-4 md:p-8'>
          <div className='bg-white rounded-[20px] w-[300px] md:w-[400px]'>
            <ProductCard img={img2} salePosition='top-[20px] left-[20px] md:top-[40px] md:left-[40px]' />
          </div>
        </Link>
        <Link to='/biorunner' className='block sm:block md:hidden mx-auto mt-4 '>
          <div className='bg-gray-300 rounded-[20px]'>
            <ProductCard img={img2} salePosition='top-[20px] left-[20px]' />
          </div>
        </Link>
      </div>
      <div className='container-sm'>
        <div className='flex justify-between items-center mx-[10px]'>
          <p className='text-2xl mt-8'>OUR BEST SELLERS</p>
          <div className='flex items-center gap-2'>
            <Link className='text-2xl mt-8'>View All </Link>
            <FaLongArrowAltRight className='mt-8' />
          </div>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2'>
          {bestSellers.map((bestSeller) => (
            <BestSellerCard key={bestSeller.id} bestSeller={bestSeller} />
          ))}
        </div>
      </div>
      <div className='mx-[20px] lg:mx-[50px] mt-[50px] overflow-hidden'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col justify-center items-start' data-aos='fade-right' data-aos-delay='1000' data-aos-duration='1000'>
            <p className='text-[40px] font-bold font-mono'>
              KIDS COLLECTION <br /> 20% OFF SALE</p>
            <p className='text-2xl'>Exclusive, one time offer</p>
            <button className='text-white bg-blue-700 px-3 py-2 rounded-md mt-[40px]'>
              SHOP NOW
            </button>
          </div>
          <div data-aos='fade-left' data-aos-delay='1000' data-aos-duration='1000' className='md:mt-0 lg:mt-0  mt-[40px]'>
            <img src={img6} alt="" className='rounded-[20px] lg:h-[500px] md:h-[400px] h-[350px]' />
          </div>
        </div>
      </div>
      <div className='bg-black overflow-hidden mt-8'>
        <div className='animate-marquee whitespace-nowrap'>
          <p className='text-white text-xl inline-block px-8 py-7'>
            FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION
            FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION
            FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION
            FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION
            FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION
            FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION
            FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION * FRESHLY ARRIVED  * LIMITED EDITION
          </p>
        </div>
      </div>
      <div>
        <div className='flex justify-between mx-[10px] md:mx-[50px] mt-[100px]'>
          <p className='text-2xl'>SHOP COLLECTION</p>
          <div className='flex items-center'>
            <Link className='font-semibold text-2xl'>VIEW ALL</Link>
            <FaLongArrowAltRight />

          </div>
        </div>
      </div>
      <div>
        <div className='grid  md:grid-cols-3 grid-cols-1 gap-8 mx-[20px] md:mx-[50px] mt-5'>
          {Shopcollection.map((collection) => (
            <ShopBycollection key={collection.id} Shopcollection={collection} />
          ))}
        </div>
      </div>
      <div className='relative mx-[20px] md:mx-[30px]'>
        <img src={img7} alt="" className='mt-[30px] rounded-[20px] md:h-[600px] lg:h-[700px] h-[500px] w-full' />
        <div className='absolute top-4 left-4 text-black grid grid-cols-1 md:grid-cols-2  mt-[30px]' data-aos='fade-down' data-aos-duration='2000'>
          <div>
            <p className='lg:text-[70px] md:text-[50px] text-[30px] font-bold'>STEP INTO <br /> SUSTAINABLITY</p>
          </div>
          <div className='text-[20px] mt-[50px]'>
            <p className='capitalize'>this is this space to introduce visitors to the business or brand. briefly explain who's behind it,what it does and what makesit unique. share its core values and what this sites has to offer </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-[30px] mx-[20px] md:mx-[40px] mt-[50px] uppercase'>Find out  what people are saying about <b className='font-bold text-[40px] font-mono'>quenx</b></h1>
      </div>
      <div>
        <div className=' mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-[20px] md:mx-[30px]'>
          {saying.map((says) => (
            <SayingQuenx key={says.id} saying={says} />
          ))}
        </div>
      </div>
    </>
  );
};

const ProductCard = ({ img, salePosition }) => {
  return (
    <div className='p-4 md:p-5 rounded-[20px] relative'>
      <img src={img} alt="" className='rounded-[20px] w-full' />
      <button className={`bg-blue-700 text-white px-4 py-1 rounded-[20px] absolute ${salePosition}`}>
        Sale
      </button>
      <p className='font-bold '>Bio Runner</p>
      <div className='flex gap-2 font-semibold'>
        <p><strike>$119.00</strike></p>
        <p className='text-blue-700'>$99.00</p>
      </div>
      <button className='bg-blue-700 text-white px-2 py-1 rounded-[5px] mt-4'>
        Add to Cart
      </button>
    </div>
  );
};

const BestSellerCard = ({ bestSeller }) => {
  return (
    <Link to={bestSeller.link}  className='p-4 md:p-5 rounded-[20px] relative mb-8 lg:mb-0'>
      <img src={bestSeller.image} alt="" className='rounded-[20px] w-full h-full object-cover' data-aos='zoom-down' data-aos-duration='1000' />
      <button className='bg-white text-white px-4 py-1 md:px-4 md:py-1 rounded-[20px] absolute top-[30px] left-[30px]'>
        <p className='text-blue-700'>Best Seller</p>
      </button>
      <p className='font-bold '>{bestSeller.name}</p>
      <div className='flex gap-2 font-semibold'>
        <p><strike>${bestSeller.originalPrice}</strike></p>
        <p className='text-blue-700'>${bestSeller.salePrice}</p>
      </div>
    </Link>
  );
};
const ShopBycollection = ({ Shopcollection }) => {
  return (
    <Link className='relative' data-aos='zoom-down' data-aos-duration='1000'>
      <img src={Shopcollection.image} alt="" className='w-full h-full rounded-[20px]' />
      <div className='absolute bottom-4 right-4 flex items-center'>
        <p className=' text-black font-bold'>{Shopcollection.name}</p>
        <FaLongArrowAltRight />
      </div>
    </Link>
  );
};
const SayingQuenx = ({ saying }) => {
  return (
    <div className='bg-gray-300 rounded-lg p-5 pb-[70px]'>
      <p className='text-2xl text-blue-700 mb-4 font-semibold'>{saying.titles}</p>
      <p>{saying.subtitle}</p>
      <div className='flex items-center mt-5 gap-2'>
      <img src={saying.image} alt='testimony' className='w-12 h-12 rounded-full' />
      <p className='font-semibold'>{saying.imageName}</p>
      </div>
    </div>
  )
}

export default Body;
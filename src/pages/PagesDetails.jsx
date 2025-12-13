// Components/PagesDetails.js
import React, { useState } from 'react';
import img2 from '../assets/sneakers2.jpg';
import img3 from '../assets/sneakers3.jpg';
import img4 from '../assets/sneakers4.jpg';
import img5 from '../assets/sneakers5.jpg';
import img6 from '../assets/sneakers7.jpg';
import img7 from '../assets/sneakers&Sub.jpg';
import img8 from '../assets/sneakers8.jpg';
import img9 from '../assets/sneakers8Sub.jpg';
import img10 from '../assets/sneakers9.jpg';
import img11 from '../assets/sneakers10.jpg';
import img12 from '../assets/sneakers10Sub.jpg';
import img13 from '../assets/sneakers6.jpg';
import img14 from '../assets/sneakers6Sub.jpg';
import img15 from '../assets/sneakers1.jpg';
import img16 from '../assets/snekers1sub.jpg';
import img17 from '../assets/sneakers13.jpg';
import img18 from '../assets/sneakers13sub.jpg';
import img19 from '../assets/sneakers12.jpg';
import img20 from '../assets/sneakers12Sub.jpg';
import img21 from '../assets/naturaljr.jpg';
import img22 from '../assets/naturaljrSub.jpg';
import img2Hover from '../assets/sneakers1sub.jpg';
import img3Hover from '../assets/sneakes3sub.jpg';
import img4Hover from '../assets/sneakers4sub.jpg';
import img5Hover from '../assets/sneakers5sub.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

const PagesDetails = ({ activeCategory: initialCategory = 'bestsellers' }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [minPrice, setMinPrice] = useState(64);
  const [maxPrice, setMaxPrice] = useState(129);
  const [filterOpen, setFilterOpen] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(6); // Start with 6 items on large screen
  const navigate = useNavigate();

  // Category routes mapping
  const categoryRoutes = {
    allproducts: '/shopall',
    activeqx: '/activeqxp',
    artisanal: '/artisanal',
    bestsellers: '/bestsellers',
    kidsshoes: '/kids'
  };

  // Category titles mapping for dynamic heading
  const categoryTitles = {
    allproducts: 'All Products',
    activeqx: 'Active Qx',
    artisanal: 'Artisanal',
    bestsellers: 'Best sellers',
    kidsshoes: 'Kids'
  };

  // Breadcrumb mapping
  const categoryBreadcrumbs = {
    allproducts: 'All Products',
    activeqx: 'Active QX',
    artisanal: 'Artisanal',
    bestsellers: 'Best Sellers',
    kidsshoes: 'Kids Shoes'
  };

  const bestSellers = [
    {
      id: 1,
      name: 'Active JR',
      image: img2,
      hoverImage: img2Hover,
      originalPrice: '80.00',
      salePrice: '64.00',
      link: '/activejr'
    },
    {
      id: 2,
      name: 'Bio Original',
      image: img3,
      hoverImage: img3Hover,
      originalPrice: '119.00',
      salePrice: '109.00',
      link: '/biooriginal'
    },
    {
      id: 3,
      name: 'Bio Perform',
      image: img4,
      hoverImage: img4Hover,
      originalPrice: '119.00',
      salePrice: '99.00',
      link: '/bioperform'
    },
    {
      id: 4,
      name: 'Limited DL',
      image: img5,
      hoverImage: img5Hover,
      originalPrice: '129.00',
      salePrice: '119.00',
      link: '/limitedDl'
    },
  ];

  const allProducts = [
    {
      id: 1,
      name: 'Signal DL',
      image: img6,
      hoverImage: img7,
      originalPrice: '100.00',
      salePrice: '129.00',
      link: '/signaldl'
    },
    {
      id: 2,
      name: 'Artisanal DL',
      image: img8,
      hoverImage: img9,
      originalPrice: '149.00',
      salePrice: '129.00',
      link: '/artisanalDl'
    },
    {
      id: 3,
      name: 'Limited DL',
      image: img10,
      hoverImage: img5Hover,
      originalPrice: '189.00',
      salePrice: '129.00',
      link: '/bioperform'
    },
    {
      id: 4,
      name: 'Core DL',
      image: img11,
      hoverImage: img12,
      originalPrice: '189.00',
      salePrice: '129.00',
      link: '/coredl'
    },
    {
      id: 5,
      name: 'Bio Basic',
      image: img13,
      hoverImage: img14,
      originalPrice: '130.00',
      salePrice: '119.00',
      link: '/biobasic'
    },
    {
      id: 6,
      name: 'Bio Perform',
      image: img4,
      hoverImage: img4Hover,
      originalPrice: '119.00',
      salePrice: '99.00',
      link: '/bioperform'
    },
    {
      id: 7,
      name: 'Bio Runner',
      image: img15,
      hoverImage: img16,
      originalPrice: '119.00',
      salePrice: '109.00',
      link: '/biorunner'
    },
    {
      id: 8,
      name: 'Bio Original',
      image: img3,
      hoverImage: img3Hover,
      originalPrice: '119.00',
      salePrice: '109.00',
      link: '/biooriginal'
    },
    {
      id: 9,
      name: 'Natural JR',
      image: img21,
      hoverImage: img22,
      originalPrice: '80.00',
      salePrice: '64.00',
      link: '/naturaljr'
    },
    {
      id: 10,
      name: 'Classic JR',
      image: img17,
      hoverImage: img18,
      originalPrice: '80.00',
      salePrice: '64.00',
      link: '/classicjr'
    },
    {
      id: 11,
      name: 'Origin JR',
      image: img19,
      hoverImage: img20,
      originalPrice: '80.00',
      salePrice: '64.00',
      link: '/originjr'
    },
    {
      id: 12,
      name: 'Active JR',
      image: img2,
      hoverImage: img2Hover,
      originalPrice: '80.00',
      salePrice: '64.00',
      link: '/activejr'
    },
  ];

  const activeQx = [
    {
      id: 1,
      name: 'Bio Original',
      image: img3,
      hoverImage: img3Hover,
      originalPrice: '119.00',
      salePrice: '109.00',
      link: '/biooriginal'
    },
    {
      id: 2,
      name: 'Bio Runner',
      image: img15,
      hoverImage: img16,
      originalPrice: '119.00',
      salePrice: '109.00',
      link: '/biorunner'
    },
    {
      id: 3,
      name: 'Bio Perform',
      image: img4,
      hoverImage: img4Hover,
      originalPrice: '119.00',
      salePrice: '99.00',
      link: '/bioperform'
    },
    {
      id: 4,
      name: 'Bio Basic',
      image: img13,
      hoverImage: img14,
      originalPrice: '130.00',
      salePrice: '119.00',
      link: '/biobasic'
    },
    
  ];

  const artisanal = [
    {
      id: 1,
      name: 'Signal DL',
      image: img6,
      hoverImage: img7,
      originalPrice: '100.00',
      salePrice: '129.00',
      link: '/signaldl'
    },
    {
      id: 2,
      name: 'Artisanal DL',
      image: img8,
      hoverImage: img9,
      originalPrice: '149.00',
      salePrice: '129.00',
      link: '/artisanalDl'
    },
    {
      id: 3,
      name: 'Limited DL',
      image: img10,
      hoverImage: img5Hover,
      originalPrice: '189.00',
      salePrice: '129.00',
      link: '/limitedDl'
    },
    {
      id: 4,
      name: 'Core DL',
      image: img11,
      hoverImage: img12,
      originalPrice: '189.00',
      salePrice: '129.00',
      link: '/coredl'
    },
  ];

  const kidsShoes = [
    {
      id: 1,
      name: 'Active JR',
      image: img2,
      hoverImage: img2Hover,
      originalPrice: '80.00',
      salePrice: '64.00',
      link: '/activejr'
    },
    {
      id: 2,
      name: 'Origin JR',
      image: img19,
      hoverImage: img20,
      originalPrice: '80.00',
      salePrice: '64.00',
      link: '/originjr'
    },
    {
      id: 3,
      name: 'Classic JR',
      image: img17,
      hoverImage: img18,
      originalPrice: '80.00',
      salePrice: '64.00',
      link: '/classicjr'
    },
    {
      id: 4,
      name: 'Natural JR',
      image: img21,
      hoverImage: img22,
      originalPrice: '80.00',
      salePrice: '64.00',
      link: '/naturaljr'
    },
  ];

  const getFilteredProducts = () => {
    let products = [];
    switch (activeCategory) {
      case 'allproducts':
        products = allProducts;
        break;
      case 'activeqx':
        products = activeQx;
        break;
      case 'artisanal':
        products = artisanal;
        break;
      case 'bestsellers':
        products = bestSellers;
        break;
      case 'kidsshoes':
        products = kidsShoes;
        break;
      default:
        products = bestSellers;
    }
    return products.filter((product) => {
      const salePrice = parseFloat(product.salePrice);
      return salePrice >= minPrice && salePrice <= maxPrice;
    });
  };

  const filteredProducts = getFilteredProducts();

  // Determine items to show based on screen size
  const getItemsPerLoad = () => {
    if (window.innerWidth >= 1024) {
      return 6; // Large screen
    } else {
      return 4; // Small screen
    }
  };

  const handleLoadMore = () => {
    const itemsPerLoad = getItemsPerLoad();
    setItemsToShow(prevItems => prevItems + itemsPerLoad);
  };

  const displayedProducts = filteredProducts.slice(0, itemsToShow);
  const hasMore = itemsToShow < filteredProducts.length;

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setFilterOpen(false);
    setItemsToShow(6); // Reset items when changing category
    navigate(categoryRoutes[category]);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className='mx-[20px] md:mx-[20px] mb-4 mt-[30px]'>
        <div className='flex items-center gap-2 text-sm md:text-base'>

          <p className=''>
            <Link to='/' className='hover:underline hover:text-gray-600'>Home</Link>
          </p>
          <BsChevronRight className=' ' />
          <p className='text-gray-600'>
            {categoryBreadcrumbs[activeCategory]}
          </p>
        </div>
      </div>

      {/* Title */}
      <h1 className='text-[50px] md:text-[60px] lg:text-[60px] font-bold mx-[20px] md:mx-[30px] mb-8 uppercase'>
        {categoryTitles[activeCategory]}
      </h1>

      <div className='flex flex-col md:flex-row mx-[10px] md:mx-[20px]'>
        {/* Desktop Sidebar */}
        <div className='hidden md:block md:w-[250px] md:pr-8'>
          <h2 className='text-base font-semibold mb-6'>Browse by</h2>

          <div className='flex flex-col space-y-3 mb-8'>
            <Link
              to='/shopall'
              className={`text-left text-sm ${activeCategory === 'allproducts' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              All Products
            </Link>
            <Link
              to='/activeqxp'
              className={`text-left text-sm ${activeCategory === 'activeqx' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              Active QX
            </Link>
            <Link
              to='/artisanal'
              className={`text-left text-sm ${activeCategory === 'artisanal' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              Artisanal
            </Link>
            <Link
              to='/bestsellers'
              className={`text-left text-sm ${activeCategory === 'bestsellers' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              Best Sellers
            </Link>
            <Link
              to='/kids'
              className={`text-left text-sm ${activeCategory === 'kidsshoes' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              Kids shoes
            </Link>
          </div>

          {/* Filter by Price */}
          <div className='border-t pt-6'>
            <h2 className='text-base font-semibold mb-6'>Filter by</h2>

            <div>
              <div className='flex items-center justify-between mb-4'>
                <p className='text-sm font-medium'>Price</p>
              </div>

              <div className='relative mb-6'>
                <div className='relative h-[2px] bg-gray-300 rounded'>
                  <div
                    className='absolute h-[2px] bg-black rounded'
                    style={{
                      left: `${(minPrice / 200) * 100}%`,
                      right: `${100 - (maxPrice / 200) * 100}%`
                    }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 10))}
                  className='absolute w-full -top-[6px] pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-0 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-[14px] [&::-moz-range-thumb]:h-[14px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0'
                  style={{ background: 'transparent' }}
                />
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 10))}
                  className='absolute w-full -top-[6px] pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-0 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-[14px] [&::-moz-range-thumb]:h-[14px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0'
                  style={{ background: 'transparent' }}
                />
              </div>

              <div className='flex justify-between text-sm'>
                <p className='text-gray-700'>${minPrice}</p>
                <p className='text-gray-700'>${maxPrice}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Offcanvas */}
        <div
          className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-white p-6 z-50 transform ${filterOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out overflow-y-auto`}
        >
          <button
            className='absolute top-4 right-4 text-3xl font-light'
            onClick={() => setFilterOpen(false)}
          >
            ×
          </button>

          <div className='mb-8'>
            <h2 className='text-base font-semibold mb-6'>Browse by</h2>

            <div className='flex flex-col space-y-3'>
              <Link
                to='/shopall'
                onClick={() => setFilterOpen(false)}
                className={`text-left text-sm ${activeCategory === 'allproducts' ? 'text-blue-600 font-medium' : 'text-gray-700'
                  }`}
              >
                All Products
              </Link>
              <Link
                to='/activeqxp'
                onClick={() => setFilterOpen(false)}
                className={`text-left text-sm ${activeCategory === 'activeqx' ? 'text-blue-600 font-medium' : 'text-gray-700'
                  }`}
              >
                Active QX
              </Link>
              <Link
                to='/artisanal'
                onClick={() => setFilterOpen(false)}
                className={`text-left text-sm ${activeCategory === 'artisanal' ? 'text-blue-600 font-medium' : 'text-gray-700'
                  }`}
              >
                Artisanal
              </Link>
              <Link
                to='/bestsellers'
                onClick={() => setFilterOpen(false)}
                className={`text-left text-sm ${activeCategory === 'bestsellers' ? 'text-blue-600 font-medium' : 'text-gray-700'
                  }`}
              >
                Best Sellers
              </Link>
              <Link
                to='/kids'
                onClick={() => setFilterOpen(false)}
                className={`text-left text-sm ${activeCategory === 'kidsshoes' ? 'text-blue-600 font-medium' : 'text-gray-700'
                  }`}
              >
                Kids shoes
              </Link>
            </div>
          </div>

          <div className='border-t pt-6 mb-8'>
            <h2 className='text-base font-semibold mb-6'>Filter by</h2>

            <div>
              <div className='flex items-center justify-between mb-4'>
                <p className='text-sm font-medium'>Price</p>
              </div>

              <div className='relative mb-6'>
                <div className='relative h-[2px] bg-gray-300 rounded'>
                  <div
                    className='absolute h-[2px] bg-black rounded'
                    style={{
                      left: `${(minPrice / 200) * 100}%`,
                      right: `${100 - (maxPrice / 200) * 100}%`
                    }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 10))}
                  className='absolute w-full -top-[6px] pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-0 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-[14px] [&::-moz-range-thumb]:h-[14px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0'
                  style={{ background: 'transparent' }}
                />
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 10))}
                  className='absolute w-full -top-[6px] pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-0 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-[14px] [&::-moz-range-thumb]:h-[14px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0'
                  style={{ background: 'transparent' }}
                />
              </div>

              <div className='flex justify-between text-sm'>
                <p className='text-gray-700'>${minPrice}</p>
                <p className='text-gray-700'>${maxPrice}</p>
              </div>
            </div>
          </div>

          <div className='border-t pt-6'>
            <h3 className='text-sm font-medium mb-4'>Sort by</h3>
            <div className='flex flex-col space-y-3'>
              <button className='text-left text-sm text-gray-700'>Recommended</button>
              <button className='text-left text-sm text-gray-700'>Price: Low to High</button>
              <button className='text-left text-sm text-gray-700'>Price: High to Low</button>
              <button className='text-left text-sm text-gray-700'>Newest</button>
            </div>
          </div>
        </div>

        {filterOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
            onClick={() => setFilterOpen(false)}
          />
        )}

        {/* Product Grid */}
        <div className='flex-1 md:pl-8'>
          <div className='flex items-center justify-between mb-6'>
            <p className='text-sm text-gray-600'>{filteredProducts.length} products</p>

            <div className='hidden md:flex items-center gap-2'>
              <span className='text-sm text-gray-600'>Sort by:</span>
              <select className='text-sm border border-gray-300 rounded px-2 py-1 outline-none cursor-pointer'>
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <button
              className='md:hidden text-sm text-gray-900 font-medium flex items-center gap-1 underline'
              onClick={toggleFilter}
            >
              Filter & Sort
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
            </button>
          </div>

          {displayedProducts.length > 0 ? (
            <>
              <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className='flex justify-center mt-10 mb-10'>
                  <button
                    onClick={handleLoadMore}
                    className='bg-blue-700 text-white px-8 py-3 rounded hover:bg-blue-500 transition-colors font-medium'
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className='text-center py-20'>
              <p className='text-gray-500'>No products found in this price range</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='cursor-pointer group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative overflow-hidden md:rounded-[20px] rounded-[10px] bg-gray-100 mb-3 '>
        <Link to={product.link} className='block aspect-square'>
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-full object-cover transition-opacity duration-300'
            style={{ opacity: isHovered ? 0 : 1 }}
          />
          <img
            src={product.hoverImage}
            alt={product.name}
            className='w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300'
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        </Link>
        {/* <div className='absolute top-3 left-3'>
          <span className='bg-white text-blue-600 text-xs font-medium px-3 py-1 rounded-full'>
            Best Seller
          </span>
        </div> */}
      </div>
      <div>
        <Link to={product.link}>
          <h3 className='font-semibold text-gray-900 mb-1 text-base'>{product.name}</h3>
        </Link>
        <div className='flex items-center gap-2'>
          <span className='text-black line-through text-sm'>${product.originalPrice}</span>
          <span className='text-blue-700 font-semibold text-base'>${product.salePrice}</span>
        </div>
      </div>
    </div>
  );
};

export default PagesDetails;
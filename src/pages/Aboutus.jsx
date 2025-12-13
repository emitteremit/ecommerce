import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import img1 from '../assets/Aboutus.png';
import img2 from '../assets/Community.jpg';
import img3 from '../assets/Sustainability.jpg';
import img4 from '../assets/Quality.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Aboutus = () => {
    useEffect(() => {
        Aos.init({
          once: false,
          duration: 1000,
        });hb
      }, []);
    const aboutuse = [
        {
            id: 1,
            title: 'Sustainability',
            subtitle: '"I love how Quenx combines style with sustainability. My sneakers are comfortable and I feel good about my purchase! The materials used are eco-friendly and the production process is transparent. It\'s refreshing to see a brand that cares about the planet." - Emily R.',
            image: img3,
        },
        {
            id: 2,
            title: 'Quality',
            subtitle: '"The quality of Quenx sneakers is unmatched. I\'ve never owned a pair that has lasted this long! The craftsmanship is top-notch and the attention to detail is impressive. I\'ve already recommended Quenx to all my friends and family." - David K.',
            image: img4,
        },
        {
            id: 3,
            title: 'Community',
            subtitle: '"Quenx is more than just a brand, it\'s a community. I love the values they stand for and the impact they\'re making. From donating to environmental organizations to promoting sustainable fashion, Quenx is truly making a difference." - Sarah T.',
            image: img2,
        },
    ];
    return (
        <>
            <Header />
            <div className=' my-8'>
                <div className='relative mx-[20px] md:mx-[30px]'>
                    <img src={img1} alt="About Us" className='w-full h-[600px] md:h-full rounded-[20px] object-cover' />

                    {/* Text Overlay Container */}
                    <div className='absolute inset-0 grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 lg:p-12'>

                        {/* First Text Block */}
                        <div className='mb-8 md:mb-0' data-aos='fade-down' data-aos-duration='2000'>
                            <p className='text-[40px] sm:text-[40px] md:text-[50px] lg:text-[70px] font-bold  font-Helvetica text-black'>
                                ABOUT US
                            </p>
                        </div>

                        {/* Second Text Block */}
                        <div className='md:text-left' data-aos='fade-down' data-aos-duration='2000'>
                            <p className='text-[30px] sm:text-[40px] md:text-[30px] lg:text-[40px] font-bold font-Helvetica text-black'>
                                Hydration  with Heart.
                            </p>
                            <p className='text-lg sm:text-xl md:text-[16px] font-normal mt-2 text-black'>
                                Quenx was born from a simple question: Why should we choose between
                                style and sustainability? Founded in 2020, we set out to prove that
                                premium footwear doesn't have to cost the earth. Every pair of Quenx
                                sneakers represents our commitment to cruelty-free fashion, innovative
                                design, and environmental responsibility.We believe that walking with
                                purpose means walking with conscience. That's why we've dedicated ourselves
                                to creating vegan sneakers that look good, feel great, and do better for our planet.
                            </p>
                        </div>

                    </div>
                </div>
                <div className='mt-[50px] mx-[20px]'>
                    <h1 className='text-[30px]'>WE STAND FOR</h1>
                    <p className='mb-[30px]'>
                        At Quenx, our values aren't just words they're woven into every stitch, every material choice, and every business decision we make.
                        We stand for compassion. 100% vegan, always. No animals harmed for fashion.
                        We stand for the planet. Sustainable materials, ethical production, and carbon-conscious practices at every step.
                        We stand for quality. Sneakers built to last, designed to endure, crafted with care.
                        We stand for transparency. You deserve to know where your shoes come from and how they're made.
                        We stand for you. Our customers aren't just buyers—they're partners in building a better, more sustainable future.
                        When you wear Quenx, you're not just wearing sneakers. You're wearing your values. You're walking with purpose.
                    </p>
                </div>
                <div className='mx-[30px]'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                        {aboutuse.map((About) => (
                            <Aboutimg key={About.id} About={About} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
const Aboutimg = ({ About }) => {
    return (
        <div className='bg-[#F0F0F0]  p-4 rounded-md'>
                <img src={About.image} alt={About.title} className='w-full h-[500px] md:h-[350px] object-cover rounded-md'/>
            <div className=''>
                <div>
                    <p className='font-semibold text-[23px] text-blue-700 mt-5 mb-5'>{About.title}</p>
                    <p className='text-md'>{About.subtitle}</p>
                </div>
            </div>
        </div>
    );
};
export default Aboutus;
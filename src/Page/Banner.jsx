import React from 'react';
import BannerImage from '../assets/banner.jpg'

const Banner = () => {
  return (
    <section className="bg-white pt-10 md:pt-16">
      <div className="w-full mx-auto">
        {/* Banner Container */}
        <div 
          className="relative w-full h-62.5 md:h-87.5 lg:h-112.5 overflow-hidden bg-gray-950 flex items-center"
        >
          {/* Background Image Layer */}
          <img 
            src={BannerImage}
            alt="School & Madrasah Environment"
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
          />

          {/* Text and Logo Content */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center p-6 md:p-10 text-center gap-4">
        
            {/* Bengali, Arabic, and English Text */}
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                <span className="bengali-font">ডেমো স্কুল ও মাদ্রাসা</span>
              </h1>
              
              <p className="text-yellow-400 text-lg md:text-2xl lg:text-4xl font-medium drop-shadow">
                <span className="arabic-font">موقع تجريبي للمدرسة والمعهد الديني</span>
              </p>
              
              <p className="text-white text-sm md:text-lg lg:text-2xl font-bold uppercase tracking-[0.2em] drop-shadow">
                DEMO SCHOOL AND MADRASAH
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Banner;
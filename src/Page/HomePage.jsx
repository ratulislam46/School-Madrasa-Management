import React from 'react';
import Testimonials from './Testimonials';
import LatestNews from './LatestNews';
import ImportantLinks from './ImportantLinks';
import StaffSection from './StaffSection';
import MultiMedia from './MultiMedia';
import Gallery from './Gallery';
import HistoryAndMessages from './HistoryAndMessages';
import HeroSection from './HeroSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <HistoryAndMessages/>
            <StaffSection/>
            <Gallery/>
            <MultiMedia/>
            <ImportantLinks/>
            <LatestNews/>
           <Testimonials/>
        </div>
    );
};

export default HomePage;
import React from 'react';
import Banner from './Banner';
import MenuBar from '../Home/MenuBar';
import HeroSection from '../Home/HeroSection';
import HistoryAndMessages from '../Home/HistoryAndMessages';
import StaffSection from '../Home/StaffSection';
import Gallery from '../Home/Gallery';
import MultiMedia from '../Home/MultiMedia';
import ImportantLinks from '../Home/ImportantLinks';
import LatestNews from '../Home/LatestNews';
import Testimonials from '../Home/Testimonials';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <MenuBar/>
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
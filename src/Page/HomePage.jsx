import React from 'react';
import Testimonials from './Testimonials';
import LatestNews from './LatestNews';
import ImportantLinks from './ImportantLinks';
import StaffSection from './StaffSection';
import MultiMedia from './MultiMedia';

const HomePage = () => {
    return (
        <div>
            <MultiMedia/>
            <StaffSection/>
            <ImportantLinks/>
            <LatestNews/>
           <Testimonials/>
        </div>
    );
};

export default HomePage;
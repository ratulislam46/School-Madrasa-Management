import React from 'react';
import Testimonials from './Testimonials';
import LatestNews from './LatestNews';
import ImportantLinks from './ImportantLinks';
import StaffSection from './StaffSection';

const HomePage = () => {
    return (
        <div>
            <StaffSection/>
            <ImportantLinks/>
            <LatestNews/>
           <Testimonials/>
        </div>
    );
};

export default HomePage;
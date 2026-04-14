import React from 'react';
import Testimonials from './Testimonials';
import LatestNews from './LatestNews';
import ImportantLinks from './ImportantLinks';

const HomePage = () => {
    return (
        <div>
            <ImportantLinks/>
            <LatestNews/>
           <Testimonials/>
        </div>
    );
};

export default HomePage;
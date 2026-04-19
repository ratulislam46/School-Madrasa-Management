import React from 'react';

const DefaultWeight = ({ children }) => {
    return (
        <section className='md:py-16 px-6 md:px-16 lg:px-24'>
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    );
};

export default DefaultWeight;
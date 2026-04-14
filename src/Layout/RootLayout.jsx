import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <main>
               <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default RootLayout;
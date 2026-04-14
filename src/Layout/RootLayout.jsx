import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div>
            <nav>
                <Navbar/>
            </nav>
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
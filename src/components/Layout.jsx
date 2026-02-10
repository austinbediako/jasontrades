import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StatusBanner from './StatusBanner';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background-dark text-white font-display flex flex-col">
            <StatusBanner />
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

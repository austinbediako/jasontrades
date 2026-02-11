import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatusBanner from '../components/StatusBanner';

const MarketingLayout = ({ children }) => {
	return (
		<div className="min-h-screen bg-background-dark text-white font-display flex flex-col">
			<div className="sticky top-0 z-50 w-full">
				<StatusBanner />
				<Navbar />
			</div>
			<main className="flex-grow">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default MarketingLayout;

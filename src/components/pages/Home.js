import React from 'react';
import '../../App.css';
import HomeCards from '../HomeCards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Home() {
	return (
		<>
			<HeroSection />
            <HomeCards />
			<Footer />
		</>
	);
}

export default Home;

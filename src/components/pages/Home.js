import React from 'react';
import '../../App.css';
import HomeCards from '../HomeCards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

import { motion } from "framer-motion";

function Home() {
	return (
		<motion.div 
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		>
			<HeroSection />
            <HomeCards />
			<Footer />
		</motion.div>
	);
}

export default Home;

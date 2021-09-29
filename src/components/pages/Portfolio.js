import React from 'react';
import '../../App.js';
import '../HomeCards.css';
import Footer from '../Footer';
import Vimeo from '@u-wave/react-vimeo';

import { motion } from "framer-motion";


export default function Portfolio() {
	return (
		<motion.div 
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		>
			<h1 className='pageHeader'>- Portfolio -</h1>
            <div className='portfolio'>
                <Vimeo className='cards__item' video='589555431' autoplay />
                <Vimeo video='589548900' />
                <Vimeo video='589555431' />
            </div>
            <Footer />

		</motion.div>
	);
}

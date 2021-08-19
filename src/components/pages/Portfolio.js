import React from 'react';
import '../../App.js';
import '../HomeCards.css';
import Footer from '../Footer';
import Vimeo from '@u-wave/react-vimeo';

export default function Portfolio() {
	return (
		<>
			<h1 className='pageHeader'>- Portfolio -</h1>
            <div className='portfolio'>
                <Vimeo className='cards__item' video='589555431' autoplay />
                <Vimeo video='589548900' />
                <Vimeo video='589555431' />
            </div>
            <Footer />

		</>
	);
}

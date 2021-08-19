import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
	return (
		<div className='hero-container'>
			<video src='/videos/video-1.mp4' autoPlay loop muted></video> 
			<h1>WEDDING VIDEO IRELAND</h1>
			<p>(films about love)</p>
			<div className='hero-btns'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					BOOK YOUR DATE NOW!
				</Button>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					WATCH HIGHLIGHT TRAILERS <i className='far fa-play-circle' />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;

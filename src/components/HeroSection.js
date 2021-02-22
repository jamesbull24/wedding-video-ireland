import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
	return (
		<div className='hero-container'>
			<video src='/videos/video-1.mp4' autoPlay loop muted></video> 
			<h1>WVI</h1>
			<p>What are you waiting for?</p>
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
					WATCH OUR TRAILERS <i className='far fa-play-circle' />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;

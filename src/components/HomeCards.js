import React from 'react';
import './HomeCards.css';
import CardItem from './CardItem';

function HomeCards() {
	return (
		<div className='cards'>
			
			<h2>Meet the team!</h2>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='images/videographer1.jpg'
							alt='Videographer'
							text='As owner of WVI, James is an avid videographer. He’s worked on recording and editing amateur short films, music videos, and entered into the wedding industry in 2020. When he’s not filming or editing he enjoys relaxing at the beach, hiking, tag rugby and front end programming.'
							label='James B'
							path='/services'
						/>
						<CardItem
							src='images/videographer2.jpg'
							alt='Videographer'
							text='As a dependable second shooter, Jevan specialises in shots of groom preparation, ceremony audience reactions, and miscellaneous B-roll shots throughout your wedding day.'
							label='Jevan McA'
							path='/products'
						/>
						<CardItem
							src='images/videographer3.jpg'
							alt='Drone specialist'
							text='Kevin loves drone. Hes our aerial drone operator, IAA licenced and generally enjoys all things that fly.'
							label='Kevin I'
							path='/sign-up'
						/>
					</ul>
				</div>
			</div>

			<h2>Our Packages</h2>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='images/highlightCard.jpg'
							text='Full Day Coverage. 
							Five to six minute cinematic wedding video, capturing your wedding day naturally with no staging or posing needed.'
							label='Highlight Film | €1099'
							path='/packages'
						/>
						<CardItem
							src='images/premiumCard.jpg'
							text='Full Day Coverage. 
							Nine to ten minute cinematic wedding video, capturing your wedding day naturally with no staging or posing needed.'
							label='Feature Film | €1299'
							path='/packages'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default HomeCards;

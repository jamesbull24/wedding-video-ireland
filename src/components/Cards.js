import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
	return (
		<div className='cards'>
			<h1>Our Packages</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='images/img-9.jpg'
							text='Full Day Coverage. 
							2 cinematic style wedding videos capturing your wedding day with no staging or posing needed.
							FREE drone usage at 1 location of your choice'
							label='Standard | €1099'
							path='/packages'
						/>
						<CardItem
							src='images/img-2.jpg'
							text='3 Cameras incl Drone'
							label='Premium | €1299'
							path='/packages'
						/>
					</ul>
				</div>
			</div>	
			<h1>Meet the team!</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>		
					<ul className='cards__items'>
						<CardItem
							src='images/img-3.jpg'
							text='James has been creating videos for the last 15 years. He’s worked on projects ranging from short films, to advertisements, music videos, feature films and documentaries and entered into the wedding industry in 2016. When he’s not filming or editing he enjoys relaxing at the beach, hiking, training in mixed martial arts, skateboarding,'
							label='James Bull'
							path='/services'
						/>
						<CardItem
							src='images/img-4.jpg'
							text='Drone and lens specialist.'
							label='Kevin Jevan'
							path='/products'
						/>
						<CardItem
							src='images/img-8.jpg'
							text='Ride through the Sahara Desert on a guided camel tour'
							label='Aisling O Neill'
							path='/sign-up'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
	return (
		<div className='cards'>
			
			<h1>Meet the team!</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='images/videographer1.jpg'
							alt='Videographer'
							text='James has been creating videos for the last 15 years. He’s worked on projects ranging from short films, to advertisements, music videos, feature films and documentaries and entered into the wedding industry in 2016. When he’s not filming or editing he enjoys relaxing at the beach, hiking, training in mixed martial arts, skateboarding,'
							label='James B'
							path='/services'
						/>
						<CardItem
							src='images/videographer2.jpg'
							alt='Videographer'
							text='Second videographer, specialising in shots of bridal preparation, audience reactions, and B-roll.'
							label='Aisling O N'
							path='/products'
						/>
						<CardItem
							src='images/videographer3.jpg'
							alt='Drone specialist'
							text='Aerial drone operator, IAA licenced and audio specialist.'
							label='Kevin I'
							path='/sign-up'
						/>
					</ul>
				</div>
			</div>

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
		</div>
	);
}

export default Cards;

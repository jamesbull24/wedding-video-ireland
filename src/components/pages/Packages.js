import React from 'react';
import CardItem from '../CardItem';
import '../../App.js';

function Packages() {
    return (
        <>
            <h1 className="packages">- Packages -</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='images/img-9.jpg'
							text='* five to six minute wedding video
							* 2 videographers
                            * all day coverage
                            * full ceremony AND speeches edit
                            * aerial footage
                            * anywhere in Ireland'
							label='The Highlight Film | €1199'
							path='/packages'
						/>
						<CardItem
							src='images/img-2.jpg'
							text='3 Cameras incl Drone'
							label='The Feature Film | €1499'
							path='/packages'
						/>
					</ul>
				</div>
			</div>
        </>
    )
}

export default Packages;
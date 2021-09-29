import React from 'react';
import CardItem from '../CardItem';
import '../../App.js';

import { motion } from "framer-motion";

function Packages() {
    return (
		<motion.div 
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		>
            <h1 className="pageHeader">- Packages -</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='images/highlightCard.jpg'
							text='* five to six minute wedding video
							* 2 videographers
                            * all day coverage
                            * full ceremony AND speeches edit
                            * aerial footage
                            * anywhere in Ireland'
							label='The Highlight Film | €1099'
							path='/packages'
						/>
						<CardItem
							src='images/premiumCard.jpg'
							text='3 Cameras incl Drone'
							label='The Feature Film | €1299'
							path='/packages'
						/>
					</ul>
				</div>
			</div>
        </motion.div>
    )
}

export default Packages;
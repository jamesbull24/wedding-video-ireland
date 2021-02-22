import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const menuClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	}; // render showButton only at certain size

	useEffect(() => {
		showButton();
	}, []); // render showButton once. (doesnt reappear on page refresh)

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						WVI
						<i class='fab fa-typo3' />
					</Link>
					<div className='menu-icon' onClick={menuClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>

					<ul
						className={click ? 'nav-menu active' : 'nav-menu'}
						onClick={closeMobileMenu}
					>
						<li className='nav-item'>
							<Link to='/' className='nav-links' /*onClick={closeMobileMenu}*/>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/portfolio'
								className='nav-links'
								// onClick={closeMobileMenu}
							>
								Portfolio
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/packages'
								className='nav-links'
								// onClick={closeMobileMenu}
							>
								Packages
							</Link>
						</li>

						<li>
							<Link
								to='/book-date'
								className='nav-links-mobile'
								// onClick={closeMobileMenu}
							>
								Book date!
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle='btn--outline'>BOOK DATE!</Button>}
				</div>
			</nav>
		</>
	);
}

export default Navbar;

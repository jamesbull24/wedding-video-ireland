import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--primaryDark', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];
	// default is first style in array

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; // default is first style in array

	return (
		<Link to='/book-date' className='btn-mobile'>
			<button
				className={`btn ${checkButtonStyle} ${checkButtonSize}`}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</Link>
	);
};

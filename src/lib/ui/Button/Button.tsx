import './Button.css';

import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isElevated?: boolean;
	icon?: React.ReactNode;
}

export const Button: React.FC<IProps> = ({ children, className = '', isElevated = false, icon, ...rest }) => {
	const classes = ['btn-root', `${isElevated && 'btn-elevated'}`, `${className}`];

	return (
		<button className={classes.join(' ')} {...rest}>
			{icon}
			{children}
		</button>
	);
};

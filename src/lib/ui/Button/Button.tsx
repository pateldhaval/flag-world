import './Button.css';

import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isElevated?: boolean;
	size?: 'md' | 'sm';
	weight?: '300' | '600' | '800';
	icon?: React.ReactNode;
}

export const Button: React.FC<IProps> = ({
	children,
	className = '',
	isElevated = false,
	size = 'md',
	weight = '300',
	icon,
	...rest
}) => {
	const classes = ['btn-root', `${isElevated && 'btn-elevated'}`, `size-${size}`, `weight-${weight}`, `${className}`];

	return (
		<button className={classes.join(' ')} {...rest}>
			{icon}
			<span className='btn-text'>{children}</span>
		</button>
	);
};

import './Card.css';

import React from 'react';

import { Typography } from '@/lib/ui';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	image: string;
	title: string;
	children: React.ReactNode;
}

export const Card: React.FC<IProps> = ({ image, title, children, className, ...rest }) => {
	const classes = ['card-root', `${className}`];

	return (
		<div className={classes.join(' ')} {...rest}>
			{image && (
				<figure>
					<img src={image} alt={title} loading='lazy' />
				</figure>
			)}
			<div className='card-content'>
				<Typography component='h3' className='card-title'>
					{title}
				</Typography>
				<div className='card-body'>{children}</div>
			</div>
		</div>
	);
};

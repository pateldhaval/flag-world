import './Card.css';

import React from 'react';

import { Typography } from '@/lib/ui';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	image: string;
	imageRatio?: string;
	children: React.ReactNode;
}

export const Card: React.FC<IProps> = ({ title, image, imageRatio = 16 / 9, children, className = '', ...rest }) => {
	const classes = ['card-root', `${className}`];

	return (
		<div className={classes.join(' ')} {...rest}>
			{image && (
				<figure>
					<img src={image} alt={title} style={{ aspectRatio: imageRatio }} loading='lazy' />
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

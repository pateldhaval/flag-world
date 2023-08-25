import './Card.css';

import React from 'react';

import { Typography } from '@/lib/ui/Typography';

interface IProps {
	image: string;
	title: string;
	children: React.ReactNode;
}

export const Card: React.FC<IProps> = ({ image, title, children }) => {
	return (
		<div className='card-root'>
			<figure>
				<img src={image} alt={title} />
			</figure>
			<div className='card-content'>
				<Typography component='h4' className='card-title'>
					{title}
				</Typography>
				<div className='card-body'>{children}</div>
			</div>
		</div>
	);
};

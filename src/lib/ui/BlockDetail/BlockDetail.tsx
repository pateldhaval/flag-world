import React from 'react';

import { Typography } from '@/lib/ui';

interface IProps {
	title: string;
	value: string;
}

export const BlockDetail: React.FC<IProps> = ({ title, value }) => {
	return (
		<Typography className='block-detail'>
			<Typography component='span' weight={600}>
				{title}:
			</Typography>
			<span> {value}</span>
		</Typography>
	);
};

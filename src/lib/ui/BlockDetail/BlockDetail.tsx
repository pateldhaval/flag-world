import React from 'react';

import { Typography } from '@/lib/ui';

import { Stack } from '../layers/Stack';

interface IProps {
	title: string;
	value: string;
}

export const BlockDetail: React.FC<IProps> = ({ title, value }) => {
	return (
		<Stack direction='row' gap={1}>
			<Typography component='span' weight={600}>
				{title}:
			</Typography>
			<Typography>{value}</Typography>
		</Stack>
	);
};

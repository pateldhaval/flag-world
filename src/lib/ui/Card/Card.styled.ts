import styled from '@emotion/styled';

import { Typography } from '../';

export interface ICard extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	image: string;
	imageRatio?: number;
	children: React.ReactNode;
}

export const CardWrapper = styled.div`
	box-shadow: 0 0px 3px 1px ${(props) => props.theme.color.shadow};
	border-radius: 0.375rem;
	overflow: hidden;
	height: 100%;
	background-color: ${(props) => props.theme.color.card};
`;

export const CardImage = styled.figure`
	margin: 0;
	background-color: ${(props) => props.theme.color.highlight};

	& img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center center;
	}
`;

export const CardContent = styled.div`
	padding: 1.25rem;
	padding-bottom: 2rem;
`;

export const CardTitle = styled(Typography)`
	margin-bottom: 0.75rem;
`;

export const CardBody = styled.div``;

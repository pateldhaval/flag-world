import React from 'react';

import { CardBody, CardContent, CardImage, CardTitle, CardWrapper, ICard } from './Card.styled';

export const Card: React.FC<ICard> = ({ image, title, imageRatio, children, ...rest }) => {
	return (
		<CardWrapper {...rest}>
			{image && (
				<CardImage>
					<img src={image} alt={title} style={{ aspectRatio: imageRatio }} loading='lazy' />
				</CardImage>
			)}
			<CardContent>
				<CardTitle component='h3'>{title}</CardTitle>
				<CardBody>{children}</CardBody>
			</CardContent>
		</CardWrapper>
	);
};

Card.defaultProps = {
	imageRatio: 16 / 9
};

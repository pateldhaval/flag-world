import React from 'react';

import { ButtonStyled, IButton } from './Button.styled';

export const Button: React.FC<IButton> = ({ children, icon, ...rest }) => {
	return (
		<span>
			<ButtonStyled {...rest}>
				{icon}
				<span>{children}</span>
			</ButtonStyled>
		</span>
	);
};

Button.defaultProps = {
	isElevated: false,
	size: 'md',
	weight: 300
};

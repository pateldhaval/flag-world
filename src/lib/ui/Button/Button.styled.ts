import { weight } from '@/lib/utils/tokens.utils';
import styled from '@emotion/styled';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isElevated?: boolean;
	size?: 'md' | 'sm';
	weight?: number;
	icon?: React.ReactNode;
}

export const ButtonStyled = styled.button<IButton>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	line-height: 1.25rem;
	font-weight: 300;
	cursor: pointer;
	border: 1px solid transparent;
	background-color: transparent;
	color: inherit;
	padding: 0;
	font-weight: ${(props) => weight[props.weight || 300]};
	white-space: nowrap;

	/* Colors */
	background-color: ${(props) => props.theme.color.background};
	color: ${(props) => props.theme.color.foreground};

	/* isElevated */
	box-shadow: ${(props) => props.isElevated && `0 0px 3px 1px ${props.theme.color.shadow}`};

	/* sizes */
	font-size: ${(props) => props.size === 'md' && '1rem'};
	font-size: ${(props) => props.size === 'sm' && '0.875rem'};

	/* Composite */
	/* isElevated & sizes */
	padding: ${(props) => props.isElevated && props.size === 'md' && '0.6rem 1rem'};
	padding: ${(props) => props.isElevated && props.size === 'sm' && '0.4rem 0.75rem'};

	&:hover {
		/* isElevated */
		box-shadow: ${(props) => props.isElevated && `0 0px 10px 3px ${props.theme.color.shadow}`};
	}
`;

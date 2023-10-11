import styled from '@emotion/styled';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ReactNode;
}

export const FormControl = styled.div`
	position: relative;
`;

export const InputStyled = styled.input<IInput>`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 2.75rem;
	font-size: 1rem;
	font-weight: 600;
	border-radius: 0.375rem;
	border: 1px solid transparent;
	outline: none;
	padding-right: 1.5rem;
	padding-left: ${({ icon }) => (icon ? '3.5rem' : '1.5rem')};

	box-shadow: 0 0px 3px 1px ${({ theme }) => theme.color.shadow};
	background-color: ${({ theme }) => theme.color.background};
	color: ${({ theme }) => theme.color.foregroundControl};

	${FormControl}:hover & {
		box-shadow: 0 0px 10px 3px ${({ theme }) => theme.color.shadow};
	}
`;

export const InputIcon = styled.span`
	display: inline-flex;
	position: absolute;
	left: 1.5rem;
	top: 50%;
	transform: translateY(-50%);
	z-index: 1;
`;

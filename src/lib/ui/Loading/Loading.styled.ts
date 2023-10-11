import styled from '@emotion/styled';

export interface ISpinner {
	size?: number;
}

export const LoadingSpinner = styled.div<ISpinner>`
	display: inline-flex;
	border-radius: 50%;
	border: 3px solid ${({ theme }) => theme.color.spinnerCircle};
	border-bottom-color: ${({ theme }) => theme.color.spinnerMain};
	animation: rotation 1s linear infinite;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

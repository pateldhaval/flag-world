import styled from '@emotion/styled';

export const SelectWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1 1 0%;
	width: 100%;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 600;
`;

export const SelectButtonBase = styled.button`
	background-color: transparent;
	border: none;
	color: inherit;
	font-size: inherit;
	font-weight: inherit;
	padding: 0;
	cursor: pointer;
`;

export const SelectTrigger = styled(SelectButtonBase)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 2.75rem;
	padding: 0.75rem 1rem;
	margin-bottom: 0.75rem;
	border-radius: 0.375rem;
	box-shadow: 0 0px 3px 1px ${({ theme }) => theme.color.shadow};
`;

export const SelectAction = styled.span`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const SelectClear = styled.span`
	display: inline-flex;

	&:hover {
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export const OptionsList = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	top: 100%;

	list-style: none;
	margin: 0;
	padding: 0;
	box-shadow: 0 0px 3px 1px ${({ theme }) => theme.color.shadow};
	background-color: ${({ theme }) => theme.color.background};

	overflow: auto;
	z-index: 2;
	flex: 1 1 0%;
	align-items: center;
	border-radius: 0.375rem;
	width: 13rem;
	max-width: 24rem;
	max-height: 10rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 600;
	text-align: left;
	visibility: hidden;

	// [SWC plugins added to make this work]
	${SelectWrapper}:hover & {
		visibility: visible;
		animation: slideDown 100ms linear;
	}

	@keyframes slideDown {
		0% {
			height: 0;
		}
		to {
			height: 160px;
		}
	}
`;

export const OptionsItem = styled(SelectButtonBase)`
	width: 100%;
	padding: 6px 12px;
	text-align: left;

	&:hover {
		background-color: ${({ theme }) => theme.color.highlight};
	}
`;

import styled from '@emotion/styled';

export const CountryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	gap: 2rem;

	@media (max-width: 1279px) {
		gap: 1.5rem;
	}
`;

export const CountryItem = styled.div`
	cursor: pointer;
	grid-column: span 3 / span 3;

	.card-body {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	&:active {
		transform: scale(0.9);
	}

	&:hover {
		box-shadow: 0 3px 5px 1px var(--shadow);
	}

	@media (max-width: 1279px) {
		grid-column: span 4 / span 4;
	}
	@media (max-width: 767px) {
		grid-column: span 6 / span 6;
	}
	@media (max-width: 579px) {
		grid-column: 1 / -1;
	}
`;

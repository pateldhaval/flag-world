import { Stack } from '@/lib/ui/layers/Stack';
import styled from '@emotion/styled';

export const CountryWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 4rem;

	@media (max-width: 1279px) {
		grid-template-columns: 1fr;
	}
`;

export const CountryImage = styled.figure`
	max-width: 26rem;

	@media (max-width: 579px) {
		max-width: 100%;
	}
`;

export const CountryContent = styled.div`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	column-gap: 0.5rem;
	row-gap: 2rem;
`;

export const InfoListLeft = styled(Stack)`
	grid-column: span 4 / span 4;

	@media (max-width: 1440px) {
		grid-column: span 5 / span 5;
	}
	@media (max-width: 767px) {
		grid-column: 1 / -1;
	}
`;

export const InfoListRight = styled(Stack)`
	grid-column: span 8 / span 8;

	@media (max-width: 1440px) {
		grid-column: span 7 / span 7;
	}
	@media (max-width: 767px) {
		grid-column: 1 / -1;
	}
`;

export const BorderListWrapper = styled(Stack)`
	@media (max-width: 767px) {
		flex-direction: column;
		align-items: start;
	}
`;

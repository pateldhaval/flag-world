import { Card } from '@/lib/ui';
import styled from '@emotion/styled';

export const CountryCardWrapper = styled(Card)`
	cursor: pointer;

	&:active {
		transform: scale(0.9);
	}

	&:hover {
		box-shadow: 0 3px 5px 1px ${({ theme }) => theme.color.shadow};
	}
`;

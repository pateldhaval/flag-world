import { Button, Typography } from '@/lib/ui';
import styled from '@emotion/styled';

export const Logo = styled(Typography)`
	font-size: 1.125rem;
`;

export const ButtonColorMode = styled(Button)`
	& span {
		@media (max-width: 579px) {
			display: none;
		}
	}
`;

export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

export const HeaderWrapper = styled.header`
	padding: 1.4rem 0;
	box-shadow: 0 0px 3px 1px ${({ theme }) => theme.color.shadow};
`;

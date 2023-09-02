import { spacing } from '@/lib/utils/tokens.utils';
import styled from '@emotion/styled';

interface IProps {
	direction?: 'column' | 'row';
	gap?: number;
}

export const Stack = styled.div<IProps>`
	display: flex;
	flex-direction: ${(props) => props.direction ?? 'column'};
	gap: ${(props) => spacing[props.gap ?? 0]};
`;

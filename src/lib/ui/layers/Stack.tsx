import { AlignItems, FlexDirection, JustifyContent } from '@/lib/types/flex.types';
import { spacing } from '@/lib/utils/tokens.utils';
import styled from '@emotion/styled';

interface IProps {
	direction?: FlexDirection;
	justifyContent?: JustifyContent;
	alignItems?: AlignItems;
	gap?: number;
}

export const Stack = styled.div<IProps>`
	display: flex;
	flex-direction: ${(props) => props.direction ?? 'column'};
	justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
	align-items: ${(props) => props.alignItems ?? 'stretch'};
	gap: ${(props) => spacing[props.gap ?? 0]};
`;

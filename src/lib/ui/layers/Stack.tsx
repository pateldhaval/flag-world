import { FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap } from '@/lib/types/flex.types';
import { spacing } from '@/lib/utils/tokens.utils';
import styled from '@emotion/styled';

interface IStack {
	direction?: FlexDirection;
	justifyContent?: FlexJustifyContent;
	alignItems?: FlexAlignItems;
	wrap?: FlexWrap;
	gap?: number;
}

export const Stack = styled.div<IStack>`
	display: flex;
	flex-direction: ${({ direction = 'column' }) => direction};
	justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
	align-items: ${({ alignItems = 'stretch' }) => alignItems};
	flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
	gap: ${({ gap = 0 }) => spacing[gap]};
`;

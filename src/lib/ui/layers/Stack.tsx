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
	flex-direction: ${(props) => props.direction ?? 'column'};
	justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
	align-items: ${(props) => props.alignItems ?? 'stretch'};
	flex-wrap: ${(props) => props.wrap ?? 'nowrap'};
	gap: ${(props) => spacing[props.gap ?? 0]};
`;

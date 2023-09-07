import { spacing } from '@/lib/utils/tokens.utils';
import styled from '@emotion/styled';

interface IGrid {
	cols?: number;
	gap?: number;
}

interface IGridItem {
	colSpan?: number;
}

// TODO: need to make options for responsive

export const Grid = styled.div<IGrid>`
	display: grid;
	gap: ${({ gap = 1 }) => spacing[gap]};
	grid-template-columns: ${({ cols = 12 }) => `repeat(${cols}, minmax(0, 1fr))`};
`;

export const GridItem = styled.div<IGridItem>`
	grid-column: span ${({ colSpan = 1 }) => colSpan};
`;

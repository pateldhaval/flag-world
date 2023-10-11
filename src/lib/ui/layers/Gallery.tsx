import { spacing } from '@/lib/utils/tokens.utils';
import styled from '@emotion/styled';

interface IGallery {
	colMinWidth?: string;
	gap?: number;
}

export const Gallery = styled.div<IGallery>`
	display: grid;
	gap: ${({ gap = 1 }) => spacing[gap]};
	// [This is used only for responsive equal size grid]
	grid-template-columns: repeat(auto-fit, minmax(${({ colMinWidth = '260px' }) => colMinWidth}, 1fr));
`;

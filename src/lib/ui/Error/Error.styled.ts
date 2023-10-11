import styled from '@emotion/styled';

import { Typography } from '../';

export interface IError extends React.HTMLAttributes<HTMLDivElement> {
	message: React.ReactNode;
}

export const ErrorStyled = styled(Typography)`
	color: ${(props) => props.theme.color.errorText};
	font-weight: 600;
`;

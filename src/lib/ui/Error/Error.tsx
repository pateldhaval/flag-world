import { ErrorStyled, IError } from './Error.styled';

export const Error: React.FC<IError> = ({ message, ...rest }) => {
	return <ErrorStyled {...rest}>{message}</ErrorStyled>;
};

import { ISpinner, LoadingSpinner } from './Loading.styled';

export const Loading: React.FC<ISpinner> = ({ ...rest }) => {
	return <LoadingSpinner {...rest}></LoadingSpinner>;
};

Loading.defaultProps = {
	size: 20
};

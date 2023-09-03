import { FormControl, IInput, InputIcon, InputStyled } from './Input.styled';

export const Input: React.FC<IInput> = ({ icon, ...rest }) => {
	return (
		<FormControl>
			<InputIcon>{icon}</InputIcon>
			<InputStyled icon={icon} {...rest} />
		</FormControl>
	);
};

Input.defaultProps = {
	icon: null
};

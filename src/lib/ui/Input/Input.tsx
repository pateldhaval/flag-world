import './Input.css';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ReactNode;
}

export const Input: React.FC<IProps> = ({ icon = null, className = '', ...rest }) => {
	const classes = ['control-root', `${icon ? 'with-icon' : ''}`, `${className}`];

	return (
		<div className={classes.join(' ')}>
			<span className='icon'>{icon}</span>
			<input {...rest} />
		</div>
	);
};

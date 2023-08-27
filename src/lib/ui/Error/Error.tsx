import './Error.css';

import { Typography } from '@/lib/ui';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	message: React.ReactNode;
}

export const Error: React.FC<IProps> = ({ message, className, ...rest }) => {
	const classes = ['error-root', `${className}`];

	return (
		<Typography className={classes.join(' ')} {...rest}>
			{message}
		</Typography>
	);
};

import { Variants } from './Typography.enum';

interface IProps extends React.HTMLAttributes<HTMLElement> {
	children: React.ReactNode;
	weight?: 300 | 600 | 800;
	component?: keyof typeof Variants;
}

export const Typography: React.FC<IProps> = ({ children, weight, component = 'p', ...rest }) => {
	const Component = Variants[component] as React.ElementType;

	return (
		<Component style={{ fontWeight: weight }} {...rest}>
			{children}
		</Component>
	);
};

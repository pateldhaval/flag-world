import { Variants } from './Typography.enum';

interface IProps {
	children: React.ReactNode;
	weight?: 300 | 600 | 800;
	component?: keyof typeof Variants;
}

export const Typography: React.FC<IProps> = ({ children, weight, component = 'p' }) => {
	const Component = Variants[component] as React.ElementType;

	return <Component style={{ fontWeight: weight }}>{children}</Component>;
};

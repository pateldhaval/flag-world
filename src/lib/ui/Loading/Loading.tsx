import './Loading.css';

interface IProps {
	size?: number;
}

export const Loading: React.FC<IProps> = ({ size = 20 }) => {
	return <span className='spinner' style={{ width: size, height: size }}></span>;
};

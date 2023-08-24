import { Button } from '@/lib/ui';
import { ArrowLeft } from '@phosphor-icons/react';

export const Dashboard = () => {
	return (
		<div className='container'>
			<Button isElevated={true} icon={<ArrowLeft size={18} />}>
				Sample
			</Button>
		</div>
	);
};

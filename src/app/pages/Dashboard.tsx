import { PageHeader } from '@/app/components/PageHeader';
import { Card } from '@/lib/ui/Card/Card';
import { Input } from '@/lib/ui/Input';
import { Select } from '@/lib/ui/Select';
import { MagnifyingGlass } from '@phosphor-icons/react';

export const Dashboard = () => {
	const regions = ['Africa', 'Europe', 'Oceania', 'Americas', 'Asia', 'Antarctic'];

	return (
		<div className='container'>
			<PageHeader>
				<div style={{ maxWidth: '18rem' }}>
					<Input placeholder='Search for a country...' icon={<MagnifyingGlass size={20} />} />
				</div>
				<div style={{ width: '13rem', maxWidth: '24rem' }}>
					<Select label='Filter by Region' list={regions} />
				</div>
			</PageHeader>

			{/* <Button isElevated={true} icon={<ArrowLeft size={18} />}>Sample</Button> */}
			<div className='flag-list'>
				<Card image='https://picsum.photos/200' title='Card Title'>
					<p>test</p>
				</Card>
			</div>
		</div>
	);
};

import './Dashboard.css';

import { PageHeader } from '@/app/components/PageHeader';
import { Card } from '@/lib/ui/Card/Card';
import { Input } from '@/lib/ui/Input';
import { Select } from '@/lib/ui/Select';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { BlockDetail } from '../../components/BlockDetail/BlockDetail';

export const Dashboard = () => {
	const regions = ['Africa', 'Europe', 'Oceania', 'Americas', 'Asia', 'Antarctic'];
	const list = Array(50).fill('');

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
				{list.map((_, index) => (
					<Card key={index} image='https://picsum.photos/300/166' title='India' className='flag-item'>
						<BlockDetail title='Population' value='1380004385' />
						<BlockDetail title='Region' value='Asia' />
						<BlockDetail title='Capital' value='New Delhi' />
					</Card>
				))}
			</div>
		</div>
	);
};

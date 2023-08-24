import { PageHeader } from '@/app/components/PageHeader';

export const Dashboard = () => {
	return (
		<div className='container'>
			<PageHeader>
				<div>Search</div>
				<div>Filter</div>
			</PageHeader>
			{/* <Button isElevated={true} icon={<ArrowLeft size={18} />}>Sample</Button> */}
		</div>
	);
};

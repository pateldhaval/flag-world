import { Outlet } from 'react-router-dom';

import { Header } from '@/components/blocks/Header';

export const Layout = () => {
	return (
		<>
			<Header />
			<main className='page'>
				<Outlet />
			</main>
		</>
	);
};

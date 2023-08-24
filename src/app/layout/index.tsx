import { Outlet } from 'react-router-dom';

import { Header } from '@/app/components/Header';

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

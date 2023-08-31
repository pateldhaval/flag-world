import { Outlet } from 'react-router-dom';

import { Header } from '@/app/components/Header';
import { Page } from '@/app/styled';

export const Layout = () => {
	return (
		<>
			<Header />
			<Page>
				<Outlet />
			</Page>
		</>
	);
};

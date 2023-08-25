import { Navigate, useRoutes } from 'react-router-dom';

import { Layout } from '@/app/layout';
import { Dashboard } from '@/app/pages/Dashboard/Dashboard';
import NotFound from '@/app/pages/NotFound';

export const Router = () => {
	return useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Dashboard />
				},
				{
					path: '/404',
					element: <NotFound />
				}
			]
		},
		{
			path: '*',
			element: <Navigate to='/404' />
		}
	]);
};

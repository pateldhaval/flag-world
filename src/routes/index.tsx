import { Navigate, useRoutes } from 'react-router-dom';

import { Layout } from '@/components/layout';
import { Dashboard } from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';

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

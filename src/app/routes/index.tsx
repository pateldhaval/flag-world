import { Navigate, useRoutes } from 'react-router-dom';

import { Layout } from '@/app/layout';
import { Country } from '@/app/pages/Country';
import { Dashboard } from '@/app/pages/Dashboard';
import { NotFound } from '@/app/pages/NotFound';

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
					path: '/country-detail',
					element: <Country />
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

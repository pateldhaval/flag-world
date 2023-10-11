import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { Layout } from '@/app/layout';

import { LazyLoader } from '../components/LazyLoader';

// import Country from '@/app/pages/Country';
// import Dashboard from '@/app/pages/Dashboard';
// import NotFound from '@/app/pages/NotFound';

const Dashboard = lazy(() => import('@/app/pages/Dashboard'));
const Country = lazy(() => import('@/app/pages/Country'));
const NotFound = lazy(() => import('@/app/pages/NotFound'));

export const Router = () => {
	return useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: (
						<Suspense fallback={<LazyLoader />}>
							<Dashboard />
						</Suspense>
					)
				},
				{
					path: '/country-detail',
					element: (
						<Suspense fallback={<LazyLoader />}>
							<Country />
						</Suspense>
					)
				},
				{
					path: '/404',
					element: (
						<Suspense fallback={<LazyLoader />}>
							<NotFound />
						</Suspense>
					)
				}
			]
		},
		{
			path: '*',
			element: <Navigate to='/404' />
		}
	]);
};

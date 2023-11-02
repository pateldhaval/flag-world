import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useGlobalContext } from '@/lib/context/Global.context';
import { GlobalStyles } from '@/lib/styles/GlobalStyles';
import { themes } from '@/lib/styles/themes';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface ProviderProps {
	children: React.ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }) => {
	const { colorScheme } = useGlobalContext();

	return (
		<ThemeProvider theme={colorScheme === 'dark' ? themes.dark : themes.light}>
			<GlobalStyles />
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>{children}</BrowserRouter>
			</QueryClientProvider>
		</ThemeProvider>
	);
};

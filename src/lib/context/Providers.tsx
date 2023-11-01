import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalContext } from '@/lib/context/Global.context';
import { GlobalStyles } from '@/lib/styles/GlobalStyles';
import { themes } from '@/lib/styles/themes';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface ProviderProps {
	children: React.ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }) => {
	const { theme } = useContext(GlobalContext);

	return (
		<ThemeProvider theme={theme === 'dark' ? themes.dark : themes.light}>
			<GlobalStyles />
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>{children}</BrowserRouter>
			</QueryClientProvider>
		</ThemeProvider>
	);
};

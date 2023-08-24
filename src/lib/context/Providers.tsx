import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './Theme.context';

interface ProviderProps {
	children: React.ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }) => {
	return (
		<ThemeProvider>
			<BrowserRouter>{children}</BrowserRouter>
		</ThemeProvider>
	);
};

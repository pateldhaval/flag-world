import { createContext, useEffect, useState } from 'react';

import { getColorScheme, setColorScheme } from '@/lib/utils/common.utils';

interface IProps {
	children: React.ReactNode;
}

export const GlobalContext = createContext({
	theme: 'dark',
	handleTheme: () => {}
});

export const GlobalProvider: React.FC<IProps> = ({ children }) => {
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		const savedTheme = getColorScheme() || 'dark';
		setTheme(savedTheme);
	}, []);

	const handleTheme = () => {
		const appliedTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(appliedTheme);
		setColorScheme(appliedTheme);
	};

	const values = {
		theme,
		handleTheme
	};

	return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

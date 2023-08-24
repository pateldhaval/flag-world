import { createContext, useEffect } from 'react';

import { getColorScheme, setColorScheme } from '@/lib/utils/common.utils';

interface IProps {
	children: React.ReactNode;
}

const ThemeContext = createContext({
	handleColorScheme: () => {}
});

const ThemeProvider: React.FC<IProps> = ({ children }) => {
	useEffect(() => {
		setColorScheme(getColorScheme() || 'dark');
	}, []);

	const handleColorScheme = () => {
		if (getColorScheme() === 'dark') {
			setColorScheme('light');
		} else {
			setColorScheme('dark');
		}
	};

	const values = {
		handleColorScheme
	};

	return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };

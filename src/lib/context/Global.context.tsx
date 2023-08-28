import { createContext, useState } from 'react';

interface IProps {
	children: React.ReactNode;
}

export const GlobalContext = createContext({
	theme: 'dark',
	handleTheme: () => {}
});

export const GlobalProvider: React.FC<IProps> = ({ children }) => {
	const [theme, setTheme] = useState('dark');

	const handleTheme = () => {
		setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
	};

	const values = {
		theme,
		handleTheme
	};

	return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

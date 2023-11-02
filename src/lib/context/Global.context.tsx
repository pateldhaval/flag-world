/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';

import { useColorScheme } from '@/lib/hooks/useColorScheme';

interface IProps {
	children: React.ReactNode;
}

const GlobalContext = createContext({
	colorScheme: '',
	changeColorScheme: () => {}
});

export const GlobalProvider: React.FC<IProps> = ({ children }) => {
	const { colorScheme, changeColorScheme } = useColorScheme('dark');

	const values = {
		colorScheme,
		changeColorScheme
	};

	return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);

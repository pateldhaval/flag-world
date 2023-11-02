import { useEffect, useState } from 'react';

import { KEY_COLOR_SCHEME } from '../constants/common.constants';
import { ColorScheme } from '../types/common.types';
import { getLocalStorage, setLocalStorage } from '../utils/common.utils';

export const useColorScheme = (defaultScheme: ColorScheme) => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultScheme);

	useEffect(() => {
		const savedScheme = (getLocalStorage(KEY_COLOR_SCHEME) as ColorScheme) || defaultScheme;
		setColorScheme(savedScheme);
		saveToStorage(savedScheme);
	}, [defaultScheme]);

	const changeColorScheme = () => {
		const appliedScheme = colorScheme === 'dark' ? 'light' : 'dark';
		setColorScheme(appliedScheme);
		saveToStorage(appliedScheme);
	};

	const saveToStorage = (scheme: ColorScheme) => {
		setLocalStorage(KEY_COLOR_SCHEME, scheme);
		// document.documentElement.dataset.colorScheme = scheme;
		document.documentElement.style.colorScheme = scheme;
	};

	return {
		colorScheme,
		changeColorScheme
	};
};

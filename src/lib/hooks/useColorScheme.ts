import { useCallback, useEffect, useState } from 'react';

import { KEY_COLOR_SCHEME } from '../constants/common.constants';
import { ColorScheme } from '../types/common.types';
import { useLocalStorage } from './useStorage';

export const useColorScheme = (defaultScheme: ColorScheme) => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultScheme);
	const { get: getLocalColorScheme, set: setLocalColorScheme } = useLocalStorage(KEY_COLOR_SCHEME);

	const saveToStorage = useCallback(
		(scheme: ColorScheme) => {
			setLocalColorScheme(scheme);
			// document.documentElement.dataset.colorScheme = scheme;
			document.documentElement.style.colorScheme = scheme;
		},
		[setLocalColorScheme]
	);

	useEffect(() => {
		const savedScheme = (getLocalColorScheme() as ColorScheme) || defaultScheme;
		setColorScheme(savedScheme);
		saveToStorage(savedScheme);
	}, [defaultScheme, getLocalColorScheme, saveToStorage]);

	const changeColorScheme = () => {
		const appliedScheme = colorScheme === 'dark' ? 'light' : 'dark';
		setColorScheme(appliedScheme);
		saveToStorage(appliedScheme);
	};

	return {
		colorScheme,
		changeColorScheme
	};
};

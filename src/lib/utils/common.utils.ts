import { KEY_COLOR_SCHEME } from '@/lib/constants/common.constants';

export const setLocalStorage = (key: string, value: string) => {
	localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => localStorage.getItem(key);

export const setColorScheme = (scheme: string) => {
	setLocalStorage(KEY_COLOR_SCHEME, scheme);
	// document.documentElement.dataset.colorScheme = scheme;
	document.documentElement.style.colorScheme = scheme;
};

export const getColorScheme = () => getLocalStorage(KEY_COLOR_SCHEME);

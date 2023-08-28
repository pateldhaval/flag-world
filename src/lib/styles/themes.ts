import { Theme } from '@emotion/react';

const themeDark: Theme = {
	color: {
		background: '#2b3945',
		foreground: '#ffffff',
		foregroundControl: '#ffffff',
		highlight: '#202c37',
		shadow: '#27333f',
		card: '#202c37',
		spinnerCircle: 'rgba(255, 255, 255, 0.3)',
		spinnerMain: '#ffffff',
		errorText: '#ff8080'
	}
};

const themeLight: Theme = {
	color: {
		background: '#ffffff',
		foreground: '#000000',
		foregroundControl: '#858585',
		highlight: '#fafafa',
		shadow: '#e6e6e6',
		card: '#ffffff',
		spinnerCircle: 'rgba(0, 0, 0, 0.3)',
		spinnerMain: '#000000',
		errorText: '#e94444'
	}
};

export const themes = {
	dark: themeDark,
	light: themeLight
};

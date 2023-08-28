import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		color: {
			background: string;
			foreground: string;
			foregroundControl: string;
			highlight: string;
			shadow: string;
			card: string;
			spinnerCircle: string;
			spinnerMain: string;
			errorText: string;
		};
	}
}

import { Global, useTheme } from '@emotion/react';

export const GlobalStyles = () => {
	const { color } = useTheme();

	return (
		<Global
			styles={{
				// [Global styles]
				'*, *::before, *::after': {
					boxSizing: 'border-box'
				},
				html: {
					backgroundColor: color.background,
					color: color.foreground
				},
				body: {
					margin: 0,
					fontFamily: 'Nunito Sans',
					fontSize: '0.875rem',
					fontWeight: 300
				},
				'button, input, optgroup, select, textarea': {
					fontFamily: 'inherit'
				},
				'h1, h2, h3, h4, h5, h6': {
					fontWeight: 800,
					margin: 0
				},
				p: {
					margin: 0
				},
				figure: {
					margin: 0
				},
				img: {
					maxWidth: '100%'
				},

				// [Utility classes]
				'.flex': { display: 'flex' },
				'.inline-flex': { display: 'inline-flex' },
				'.justify-center': { justifyContent: 'center' },
				'.justify-between': { justifyContent: 'space-between' },
				'.items-center': { alignItems: 'center' },
				'.flex-col': { flexDirection: 'column' },
				'.flex-wrap': { flexWrap: 'wrap' },
				'.gap-1': { gap: '1rem' },
				'.shrink-0': { flexShrink: 0 },
				'.col-span-full': { gridColumn: '1 / -1' },
				'.text-center': { textAlign: 'center' }
			}}
		/>
	);
};

import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { ThemeProvider } from './lib/context/Theme.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

import '@/lib/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/app/App.tsx';
import { Providers } from '@/lib/context/Providers.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>
);

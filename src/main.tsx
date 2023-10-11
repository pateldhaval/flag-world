import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/app/App.tsx';
import { GlobalProvider } from '@/lib/context/Global.context';

import { Providers } from './lib/context/Providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalProvider>
			<Providers>
				<App />
			</Providers>
		</GlobalProvider>
	</React.StrictMode>
);

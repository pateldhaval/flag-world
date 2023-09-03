import * as path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react({ plugins: [['@swc/plugin-emotion', {}]] })],
	server: {
		port: 3333
	},
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
	}
});

import { useContext } from 'react';

import { ThemeContext } from '@/lib/context/Theme.context';

function App() {
	const { handleColorScheme } = useContext(ThemeContext);

	return (
		<>
			<div>Hello World!</div>
			<button onClick={handleColorScheme}>Change color scheme</button>
		</>
	);
}

export default App;

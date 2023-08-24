import './Header.css';

import { useContext } from 'react';

import { ThemeContext } from '@/lib/context/Theme.context';
import { Button } from '@/lib/ui';
import { Moon } from '@phosphor-icons/react';

export const Header = () => {
	const { handleColorScheme } = useContext(ThemeContext);

	return (
		<header className='app-header'>
			<div className='container flex justify-between items-center'>
				<h1>Where in the world?</h1>
				<Button onClick={handleColorScheme} icon={<Moon size={18} />}>
					Dark Mode
				</Button>
			</div>
		</header>
	);
};

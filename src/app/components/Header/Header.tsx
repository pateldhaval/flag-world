import './Header.css';

import { useContext } from 'react';
import { Moon } from 'react-feather';

import { ThemeContext } from '@/lib/context/Theme.context';
import { Button, Typography } from '@/lib/ui';

export const Header = () => {
	const { handleColorScheme } = useContext(ThemeContext);

	return (
		<header className='app-header'>
			<div className='app-header-content container'>
				<Typography component='h1' className='logo'>
					Where in the world?
				</Typography>
				<Button className='color-mode' onClick={handleColorScheme} size='sm' weight='600' icon={<Moon size={17} />}>
					<span>Dark Mode</span>
				</Button>
			</div>
		</header>
	);
};

import './Header.css';

import { useContext } from 'react';
import { Moon } from 'react-feather';

import { ThemeContext } from '@/lib/context/Theme.context';
import { Button, Typography } from '@/lib/ui';

export const Header = () => {
	const { handleColorScheme } = useContext(ThemeContext);

	return (
		<header className='app-header'>
			<div className='container flex justify-between items-center'>
				<Typography component='h3'>Where in the world?</Typography>
				<Button onClick={handleColorScheme} size='sm' weight='600' icon={<Moon size={17} />}>
					Dark Mode
				</Button>
			</div>
		</header>
	);
};

import './Header.css';

import { useContext } from 'react';
import { Moon } from 'react-feather';

import { ThemeContext } from '@/lib/context/Theme.context';
import { Button } from '@/lib/ui';
import { Typography } from '@/lib/ui/Typography';

export const Header = () => {
	const { handleColorScheme } = useContext(ThemeContext);

	return (
		<header className='app-header'>
			<div className='container flex justify-between items-center'>
				<Typography component='h3'>Where in the world?</Typography>
				<Button onClick={handleColorScheme} icon={<Moon size={17} />}>
					Dark Mode
				</Button>
			</div>
		</header>
	);
};

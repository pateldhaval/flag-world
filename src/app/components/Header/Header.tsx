import './Header.css';

import { useContext } from 'react';
import { Moon } from 'react-feather';

import { Container } from '@/app/components/styled';
import { GlobalContext } from '@/lib/context/Global.context';
import { Button, Typography } from '@/lib/ui';

export const Header = () => {
	const { handleTheme } = useContext(GlobalContext);

	return (
		<header className='app-header'>
			<Container>
				<div className='app-header-content'>
					<Typography component='h1' className='logo'>
						Where in the world?
					</Typography>
					<Button className='color-mode' onClick={handleTheme} size='sm' weight='600' icon={<Moon size={17} />}>
						<span>Dark Mode</span>
					</Button>
				</div>
			</Container>
		</header>
	);
};

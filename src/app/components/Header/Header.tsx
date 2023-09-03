import { useContext } from 'react';
import { Moon } from 'react-feather';

import { Container } from '@/app/components/styled';
import { GlobalContext } from '@/lib/context/Global.context';

import { ButtonColorMode, HeaderContent, HeaderWrapper, Logo } from './Header.styled';

export const Header = () => {
	const { handleTheme } = useContext(GlobalContext);

	return (
		<HeaderWrapper>
			<Container>
				<HeaderContent>
					<Logo component='h1'>Where in the world?</Logo>
					<ButtonColorMode onClick={handleTheme} size='sm' weight={600} icon={<Moon size={17} />}>
						<span>Dark Mode</span>
					</ButtonColorMode>
				</HeaderContent>
			</Container>
		</HeaderWrapper>
	);
};

import { Moon } from 'react-feather';

import { Container } from '@/app/components/styled';
import { useGlobalContext } from '@/lib/context/Global.context';
import { Stack } from '@/lib/ui/layers/Stack';

import { ButtonColorMode, HeaderWrapper, Logo } from './Header.styled';

export const Header = () => {
	const { changeColorScheme } = useGlobalContext();

	return (
		<HeaderWrapper>
			<Container>
				<Stack direction='row' justifyContent='space-between' alignItems='center' gap={4}>
					<Logo component='h1'>Where in the world?</Logo>
					<ButtonColorMode onClick={changeColorScheme} size='sm' weight={600} icon={<Moon size={17} />}>
						<span>Dark Mode</span>
					</ButtonColorMode>
				</Stack>
			</Container>
		</HeaderWrapper>
	);
};

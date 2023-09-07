import { useCountrySearch } from '@/app/hooks/useCountrySearch';
import { ICountry } from '@/app/types/country.types';
import { BlockDetail } from '@/lib/ui';
import { Stack } from '@/lib/ui/layers/Stack';

import { CountryCardWrapper } from './CountryCard.styled';

interface IProp {
	country: ICountry;
}

export const CountryCard: React.FC<IProp> = ({ country }) => {
	const { name, flags, population, region, capital } = country;

	const { handleNavigateSearch } = useCountrySearch();

	return (
		<CountryCardWrapper image={flags.svg} title={name.common} onClick={() => handleNavigateSearch(name.common)}>
			<Stack gap={1}>
				<BlockDetail title='Population' value={`${population}`} />
				<BlockDetail title='Region' value={region} />
				<BlockDetail title='Capital' value={capital[0]} />
			</Stack>
		</CountryCardWrapper>
	);
};

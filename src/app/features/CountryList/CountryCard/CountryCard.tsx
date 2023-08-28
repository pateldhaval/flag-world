import { useCountrySearch } from '@/app/hooks/useCountrySearch';
import { ICountry } from '@/app/types/country.types';
import { BlockDetail, Card } from '@/lib/ui';

interface IProp {
	country: ICountry;
}

export const CountryCard: React.FC<IProp> = ({ country }) => {
	const { name, flags, population, region, capital } = country;

	const { handleNavigateSearch } = useCountrySearch();

	return (
		<Card image={flags.svg} title={name.common} onClick={() => handleNavigateSearch(name.common)}>
			<BlockDetail title='Population' value={`${population}`} />
			<BlockDetail title='Region' value={region} />
			<BlockDetail title='Capital' value={capital[0]} />
		</Card>
	);
};
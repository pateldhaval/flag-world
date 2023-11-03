import { ICountry } from '@/app/types/country.types';
import { Gallery } from '@/lib/ui';

import { CountryCard } from '../';

interface Props {
	countries: ICountry[];
}

export const CountryList: React.FC<Props> = ({ countries }) => {
	return (
		<Gallery gap={8} colMinWidth='240px'>
			{countries?.map((country: ICountry) => {
				return <CountryCard key={country.name.official} country={country} />;
			})}
		</Gallery>
	);
};

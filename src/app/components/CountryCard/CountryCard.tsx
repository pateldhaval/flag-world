import './CountryCard.css';

import { createSearchParams, useNavigate } from 'react-router-dom';

import { ICountry } from '@/app/types/country.types';
import { Card } from '@/lib/ui/Card';

import { BlockDetail } from '../BlockDetail';

interface IProp {
	country: ICountry;
}

export const CountryCard: React.FC<IProp> = ({ country }) => {
	const { name, flags, population, region, capital } = country;

	const navigate = useNavigate();

	const handleClick = () => {
		// navigate(`/country/${name.common}`);
		navigate({
			pathname: '/country-detail',
			// search: `?country=${name.common}`
			search: createSearchParams({
				country: name.common
			}).toString()
		});
	};

	return (
		<Card image={flags.svg} title={name.common} className='country-item' onClick={handleClick}>
			<BlockDetail title='Population' value={`${population}`} />
			<BlockDetail title='Region' value={region} />
			<BlockDetail title='Capital' value={capital[0]} />
		</Card>
	);
};

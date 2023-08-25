import './CountryDetail.css';

import React from 'react';

import { ICountry } from '@/app/types/country.types';
import { Typography } from '@/lib/ui/Typography';

import { BlockDetail } from '../BlockDetail';

interface IProps {
	country: ICountry;
}

export const CountryDetail: React.FC<IProps> = ({ country }) => {
	const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = country;

	// const url = `https://restcountries.com/v3.1/alpha?codes=${borders.join(',')}&fields=name`;
	// const { loading, data: bordersList, error } = useQuery<IBorderCountry[]>(url);

	return (
		<div className='country-detail'>
			<figure>
				<img src={flags.svg} alt={name.common} />
			</figure>
			<div>
				<Typography component='h2'>{name.common}</Typography>
				<div className='detail-content'>
					<div>
						<BlockDetail title='Native Name' value={Object.values(name.nativeName).slice(-1)[0].common} />
						<BlockDetail title='Population' value={`${population}`} />
						<BlockDetail title='Region' value={region} />
						<BlockDetail title='Sub Region' value={subregion} />
						<BlockDetail title='Capital' value={capital[0]} />
					</div>
					<div>
						<BlockDetail title='Top Level Domain' value={tld[0]} />
						<BlockDetail title='Currencies' value={Object.values(currencies)[0].name} />
						<BlockDetail title='Languages' value={Object.values(languages).join(', ')} />
					</div>
				</div>
				{/* <div>
					<Typography weight={600}>Border Countries:</Typography>
					{loading && <p>Loading...</p>}
					{!!error && <p>Error...</p>}
					{bordersList &&
						bordersList.map((item) => (
							<Button key={item.name.common} isElevated={true}>
								{item.name.common}
							</Button>
						))}
				</div> */}
			</div>
		</div>
	);
};

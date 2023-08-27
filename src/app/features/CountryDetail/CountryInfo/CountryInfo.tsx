import './CountryInfo.css';

import React from 'react';

import { ICountry } from '@/app/types/country.types';
import { BlockDetail, Typography } from '@/lib/ui';

import { BorderList } from '../';

interface IProps {
	country: ICountry;
}

export const CountryInfo: React.FC<IProps> = ({ country }) => {
	const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = country;

	return (
		<div className='country-detail'>
			<figure>
				<img src={flags.svg} alt={name.common} />
			</figure>
			<div className='detail-wrapper'>
				<Typography component='h2'>{name.common}</Typography>
				<div className='detail-content'>
					<div className='detail-list detail-left'>
						<BlockDetail title='Native Name' value={Object.values(name.nativeName).slice(-1)[0].common} />
						<BlockDetail title='Population' value={`${population}`} />
						<BlockDetail title='Region' value={region} />
						<BlockDetail title='Sub Region' value={subregion} />
						<BlockDetail title='Capital' value={capital[0]} />
					</div>
					<div className='detail-list detail-right'>
						<BlockDetail title='Top Level Domain' value={tld[0]} />
						<BlockDetail title='Currencies' value={Object.values(currencies)[0].name} />
						<BlockDetail title='Languages' value={Object.values(languages).join(', ')} />
					</div>
				</div>
				<div className='flex gap-1 items-center'>
					<Typography weight={600} className='shrink-0'>
						Border Countries:
					</Typography>
					{borders.length > 0 && <BorderList borders={borders} />}
				</div>
			</div>
		</div>
	);
};

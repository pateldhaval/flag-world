import React from 'react';

import { ICountry } from '@/app/types/country.types';
import { BlockDetail, Typography } from '@/lib/ui';
import { Stack } from '@/lib/ui/layers/Stack';

import { BorderList } from '../';
import {
	BorderListWrapper,
	CountryContent,
	CountryImage,
	CountryWrapper,
	InfoListLeft,
	InfoListRight
} from './CountryInfo.styled';

interface IProps {
	country: ICountry;
}

export const CountryInfo: React.FC<IProps> = ({ country }) => {
	const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = country;

	return (
		<CountryWrapper>
			<CountryImage>
				<img src={flags.svg} alt={name.common} />
			</CountryImage>
			<Stack gap={6}>
				<Typography component='h2'>{name.common}</Typography>
				<CountryContent>
					<InfoListLeft>
						<BlockDetail title='Native Name' value={Object.values(name.nativeName).slice(-1)[0].common} />
						<BlockDetail title='Population' value={`${population}`} />
						<BlockDetail title='Region' value={region} />
						<BlockDetail title='Sub Region' value={subregion} />
						<BlockDetail title='Capital' value={capital[0]} />
					</InfoListLeft>
					<InfoListRight>
						<BlockDetail title='Top Level Domain' value={tld[0]} />
						<BlockDetail title='Currencies' value={Object.values(currencies)[0].name} />
						<BlockDetail title='Languages' value={Object.values(languages).join(', ')} />
					</InfoListRight>
				</CountryContent>
				<BorderListWrapper>
					<Typography weight={600} className='shrink-0'>
						Border Countries:
					</Typography>
					{borders.length > 0 && <BorderList borders={borders} />}
				</BorderListWrapper>
			</Stack>
		</CountryWrapper>
	);
};

import { ArrowLeft } from 'react-feather';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { PageHeader } from '@/app/components/PageHeader';
import { useQuery } from '@/app/hooks/useQuery';
import { ICountry } from '@/app/types/country.types';
import { Button, Error, Loading } from '@/lib/ui';

import { CountryInfo } from './';

export const CountryDetail = () => {
	const [params] = useSearchParams();
	const navigate = useNavigate();

	const country = params.get('country');

	const url = `https://restcountries.com/v3.1/name/${country}?fields=name,tld,currencies,region,languages,subregion,capital,borders,flags,population`;
	const { loading, data, error } = useQuery<ICountry[]>(url);

	const handleBack = () => {
		navigate('/');
	};

	return (
		<div className='container'>
			<PageHeader>
				<Button icon={<ArrowLeft size={17} />} isElevated={true} onClick={handleBack}>
					Back
				</Button>
			</PageHeader>

			{loading ? <Loading /> : <>{error ? <Error /> : data && data.length > 0 && <CountryInfo country={data[0]} />}</>}
		</div>
	);
};

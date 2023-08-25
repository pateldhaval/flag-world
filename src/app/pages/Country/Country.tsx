import { useNavigate, useSearchParams } from 'react-router-dom';

import { CountryDetail } from '@/app/components/CountryDetail';
import { PageHeader } from '@/app/components/PageHeader';
import { useQuery } from '@/app/hooks/useQuery';
import { ICountry } from '@/app/types/country.types';
import { Button } from '@/lib/ui';
import { ArrowLeft } from '@phosphor-icons/react';

export const Country = () => {
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
				<Button icon={<ArrowLeft size={18} />} isElevated={true} onClick={handleBack}>
					Back
				</Button>
			</PageHeader>

			{loading && <p>Loading...</p>}
			{!!error && <p>Error...</p>}
			{data && data.length > 0 && <CountryDetail country={data[0]} />}
		</div>
	);
};

import { ArrowLeft } from 'react-feather';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Container, PageHeader } from '@/app/components/styled';
import { ICountry } from '@/app/types/country.types';
import { useGetRequest } from '@/lib/hooks/useGetRequest';
import { Button, Error, Loading } from '@/lib/ui';
import { Stack } from '@/lib/ui/layers/Stack';

import { CountryInfo } from './';

export const CountryDetail = () => {
	const [params] = useSearchParams();
	const navigate = useNavigate();

	const countryName = params.get('country');

	const url = `https://restcountries.com/v3.1/name/${countryName}?fields=name,tld,currencies,region,languages,subregion,capital,borders,flags,population`;
	const { isLoading, data: countries, error } = useGetRequest<ICountry[]>(`country-${countryName}`, url);

	const handleBack = () => {
		navigate('/');
	};

	if (isLoading)
		return (
			<Stack justifyContent='center' alignItems='center'>
				<Loading size={32} />
			</Stack>
		);

	if (error)
		return (
			<Stack direction='row' justifyContent='center'>
				<Error message='Oops! Error in fetching country details, please try again.' />
			</Stack>
		);

	// [Filter exact country if multiple countries found from the API]
	const country = countries?.find((item) => item.name.common === countryName);

	return (
		<Container>
			<PageHeader>
				<Button icon={<ArrowLeft size={17} />} isElevated={true} onClick={handleBack}>
					Back
				</Button>
			</PageHeader>

			{country && <CountryInfo country={country} />}
		</Container>
	);
};

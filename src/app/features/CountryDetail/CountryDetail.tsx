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
	const { isLoading, data: country, error } = useGetRequest<ICountry[]>('country-detail', url);

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

	return (
		<Container>
			<PageHeader>
				<Button icon={<ArrowLeft size={17} />} isElevated={true} onClick={handleBack}>
					Back
				</Button>
			</PageHeader>

			{country && country.length > 0 && <CountryInfo country={country[0]} />}
		</Container>
	);
};

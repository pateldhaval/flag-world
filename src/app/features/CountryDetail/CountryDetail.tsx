import { ArrowLeft } from 'react-feather';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Container, PageHeader } from '@/app/components/styled';
import { useGetRequest } from '@/app/hooks/useGetRequest';
import { ICountry } from '@/app/types/country.types';
import { Button, Error, Loading } from '@/lib/ui';
import { Stack } from '@/lib/ui/layers/Stack';

import { CountryInfo } from './';

export const CountryDetail = () => {
	const [params] = useSearchParams();
	const navigate = useNavigate();

	const country = params.get('country');

	const url = `https://restcountries.com/v3.1/name/${country}?fields=name,tld,currencies,region,languages,subregion,capital,borders,flags,population`;
	const { isLoading, data, error } = useGetRequest<ICountry[]>('country-detail', url);

	const handleBack = () => {
		navigate('/');
	};

	return (
		<Container>
			<PageHeader>
				<Button icon={<ArrowLeft size={17} />} isElevated={true} onClick={handleBack}>
					Back
				</Button>
			</PageHeader>

			{isLoading ? (
				<Stack justifyContent='center' alignItems='center'>
					<Loading size={32} />
				</Stack>
			) : (
				<>
					{error ? (
						<Stack direction='row' justifyContent='center'>
							<Error message='Oops! Error in fetching country details, please try again.' />
						</Stack>
					) : (
						data && data.length > 0 && <CountryInfo country={data[0]} />
					)}
				</>
			)}
		</Container>
	);
};

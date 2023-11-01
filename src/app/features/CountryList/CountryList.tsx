import React, { useCallback, useMemo, useState, useTransition } from 'react';

import FilterBox from '@/app/components/FilterBox';
import SearchBox from '@/app/components/SearchBox';
import { Container, PageHeader } from '@/app/components/styled';
import { ICountry } from '@/app/types/country.types';
import { useGetRequest } from '@/lib/hooks/useGetRequest';
import { Error, Gallery, Loading, Stack } from '@/lib/ui';

import { CountryCard } from './';

const SearchBoxMemo = React.memo(SearchBox);
const FilterBoxMemo = React.memo(FilterBox);

export const CountryList = () => {
	const url = 'https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital';
	const { data: countries, error, isLoading } = useGetRequest<ICountry[]>('country-list', url);

	const [isSearching, startTransition] = useTransition();

	const [countriesList, setCountriesList] = useState(countries);

	// [Extract & Memoize unique regions from countries list]
	const regions = useMemo(() => [...new Set(countries?.map((item: ICountry) => item.region))], [countries]);

	// [Set search results got from the component]
	const handleSearch = useCallback((result: ICountry[]) => {
		// [This will separate out the re-rendering from react default batch process]
		// [It will prevent blocking of UI from frequent state changes like type to search, so improves UX]
		startTransition(() => setCountriesList(result));
	}, []);

	// [Filter by region]
	const handleFilterSelect = useCallback((filtered: ICountry[]) => setCountriesList(filtered), []);

	// [Clear filter]
	const handleFilterClear = useCallback(() => setCountriesList(countries), [countries]);

	const loadingElement = (
		<Stack justifyContent='center' alignItems='center'>
			<Loading size={32} />
		</Stack>
	);

	if (isLoading) return loadingElement;

	if (error)
		return (
			<Stack direction='row' justifyContent='center'>
				<Error message='Oops! Error in fetching country list, please try again.' />
			</Stack>
		);

	return (
		<Container>
			<PageHeader>
				<Stack style={{ maxWidth: '18rem' }}>
					<SearchBoxMemo list={countries} onSearch={handleSearch} />
				</Stack>
				<Stack style={{ width: '13rem', maxWidth: '24rem' }}>
					<FilterBoxMemo
						data={countries}
						filterList={regions}
						onFilter={handleFilterSelect}
						onClear={handleFilterClear}
					/>
				</Stack>
			</PageHeader>

			{isSearching ? (
				loadingElement
			) : (
				<Gallery gap={8} colMinWidth='240px'>
					{countriesList?.map((country: ICountry) => {
						return <CountryCard key={country.name.official} country={country} />;
					})}
				</Gallery>
			)}
		</Container>
	);
};

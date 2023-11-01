import { useCallback, useMemo, useState, useTransition } from 'react';

import { ICountry } from '../types/country.types';

export const useCountrySearchFilter = (countries: ICountry[]) => {
	const [isSearching, startTransition] = useTransition();

	const [countriesList, setCountriesList] = useState(countries);

	// [Set search results got from the component]
	const handleSearch = useCallback((result: ICountry[]) => {
		// [This will separate out the re-rendering from react default batch process]
		// [It will prevent blocking of UI from frequent state changes like type to search, so improves UX]
		startTransition(() => setCountriesList(result));
	}, []);

	// [Extract & Memoize unique regions from countries list]
	const regions = useMemo(() => [...new Set(countries?.map((item: ICountry) => item.region))], [countries]);

	// [Filter by region]
	const handleFilterSelect = useCallback((filtered: ICountry[]) => setCountriesList(filtered), []);

	// [Clear filter]
	const handleFilterClear = useCallback(() => setCountriesList(countries), [countries]);

	return { countriesList, regions, handleFilterSelect, handleFilterClear, handleSearch, isSearching };
};

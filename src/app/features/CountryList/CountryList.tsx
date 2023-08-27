import './CountryList.css';

import { useEffect, useState, useTransition } from 'react';
import { Search } from 'react-feather';

import { PageHeader } from '@/app/components/PageHeader';
import { useQuery } from '@/app/hooks/useQuery';
import { ICountry } from '@/app/types/country.types';
import { Error, Input, Loading, Select } from '@/lib/ui';

import { CountryCard } from './';

export const CountryList = () => {
	const url = 'https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital';
	const { data: countries, error, loading } = useQuery<ICountry[]>(url);

	const [isPending, startTransition] = useTransition();
	const [countriesList, setCountriesList] = useState(countries);
	const [search, setSearch] = useState('');

	// [Extract unique regions from countries list]
	const regions = [...new Set(countries?.map((item) => item.region))];

	// [Search]
	useEffect(() => {
		// [This will separate out the re-rendering from react default batch process]
		// [It will prevent blocking of UI from frequent state changes like search and improves UX]
		startTransition(() => {
			const found = countries?.filter((item) => item.name.common.toLowerCase().includes(search.toLowerCase()));
			setCountriesList(found || []);
		});
	}, [countries, search]);

	// [Filter by region]
	const handleFilterSelect = (selected: string) => {
		const filtered = countries?.filter((item) => item.region === selected);
		setCountriesList(filtered || []);
	};

	// [Clear filter]
	const handleFilterClear = () => {
		setCountriesList(countries);
	};

	return (
		<div className='container'>
			<PageHeader>
				<div style={{ maxWidth: '18rem' }}>
					<Input
						placeholder='Search for a country...'
						icon={<Search size={18} />}
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div style={{ width: '13rem', maxWidth: '24rem' }}>
					<Select label='Filter by Region' list={regions} onSelect={handleFilterSelect} onClear={handleFilterClear} />
				</div>
			</PageHeader>

			<div className='country-list'>
				{loading || isPending ? (
					<div className='flex justify-center col-span-full'>
						<Loading size={32} />
					</div>
				) : (
					<>
						{error ? (
							<div className='col-span-full text-center'>
								<Error message='Oops! Error in fetching country list, please try again.' />
							</div>
						) : (
							countriesList?.map((country) => {
								return (
									<div key={country.name.official} className='country-item'>
										<CountryCard country={country} />
									</div>
								);
							})
						)}
					</>
				)}
			</div>
		</div>
	);
};

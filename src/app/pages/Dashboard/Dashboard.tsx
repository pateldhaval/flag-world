import './Dashboard.css';

import { useEffect, useState } from 'react';
import { Search } from 'react-feather';

import { CountryCard } from '@/app/components/CountryCard';
import { PageHeader } from '@/app/components/PageHeader';
import { useQuery } from '@/app/hooks/useQuery';
import { ICountry } from '@/app/types/country.types';
import { Error } from '@/lib/ui/Error';
import { Input } from '@/lib/ui/Input';
import { Loading } from '@/lib/ui/Loading';
import { Select } from '@/lib/ui/Select';

export const Dashboard = () => {
	const url = 'https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital';
	const { data: countries, error, loading } = useQuery<ICountry[]>(url);

	const [countriesList, setCountriesList] = useState(countries);
	const [search, setSearch] = useState('');

	// [Extract unique regions from countries list]
	const regions = [...new Set(countries?.map((item) => item.region))];

	// [Updated countries list with search]
	useEffect(() => {
		const found = countries?.filter((item) => item.name.common.toLowerCase().includes(search.toLowerCase()));
		setCountriesList(found || []);
	}, [countries, search]);

	const handleFilterSelect = (selected: string) => {
		const filtered = countries?.filter((item) => item.region === selected);
		setCountriesList(filtered || []);
	};

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
				{loading ? (
					<Loading />
				) : (
					<>
						{error ? (
							<Error />
						) : (
							countriesList?.map((country) => {
								return <CountryCard key={country.name.official} country={country} />;
							})
						)}
					</>
				)}
			</div>
		</div>
	);
};

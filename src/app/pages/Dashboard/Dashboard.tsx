import './Dashboard.css';

import { CountryCard } from '@/app/components/CountryCard';
import { PageHeader } from '@/app/components/PageHeader';
import { useQuery } from '@/app/hooks/useQuery';
import { ICountry } from '@/app/types/country.types';
import { Error } from '@/lib/ui/Error';
import { Input } from '@/lib/ui/Input';
import { Loading } from '@/lib/ui/Loading';
import { Select } from '@/lib/ui/Select';
import { MagnifyingGlass } from '@phosphor-icons/react';

export const Dashboard = () => {
	const url = 'https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital';
	const { data: countries, error, loading } = useQuery<ICountry[]>(url);

	// [Extract unique regions from countries list]
	const regions = [...new Set(countries?.map((item) => item.region))];

	return (
		<div className='container'>
			<PageHeader>
				<div style={{ maxWidth: '18rem' }}>
					<Input placeholder='Search for a country...' icon={<MagnifyingGlass size={20} />} />
				</div>
				<div style={{ width: '13rem', maxWidth: '24rem' }}>
					<Select label='Filter by Region' list={regions} />
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
							countries &&
							countries.map((country) => {
								return <CountryCard key={country.name.official} country={country} />;
							})
						)}
					</>
				)}
			</div>
		</div>
	);
};

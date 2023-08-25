import './Dashboard.css';

import { useEffect, useState } from 'react';

import { CountryCard } from '@/app/components/CountryCard';
import { PageHeader } from '@/app/components/PageHeader';
import { ICountry } from '@/app/types/country.types';
import { Input } from '@/lib/ui/Input';
import { Select } from '@/lib/ui/Select';
import { MagnifyingGlass } from '@phosphor-icons/react';

export const Dashboard = () => {
	const [countries, setCountries] = useState<ICountry[] | null>(null);

	// [Extract unique regions from countries list]
	const regions = [...new Set(countries?.map((item) => item.region))];

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital');
				const data = await res.json();
				setCountries(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

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

			{/* <Button isElevated={true} icon={<ArrowLeft size={18} />}>Sample</Button> */}
			<div className='country-list'>
				{countries &&
					countries.map((country) => {
						return <CountryCard key={country.name.official} country={country} />;
					})}
			</div>
		</div>
	);
};

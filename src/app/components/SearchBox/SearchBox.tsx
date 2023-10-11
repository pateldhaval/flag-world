import { useEffect, useState } from 'react';
import { Search } from 'react-feather';

import { ICountry } from '@/app/types/country.types';
import { Input } from '@/lib/ui';

interface Props {
	list: ICountry[] | null;
	onSearch: (result: ICountry[]) => void;
}

const SearchBox = ({ list, onSearch }: Props) => {
	const [search, setSearch] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	// [Search]
	useEffect(() => {
		const found = list?.filter((item) => item.name.common.toLowerCase().includes(search.toLowerCase()));
		onSearch(found || []);
	}, [list, search, onSearch]);

	return (
		<Input placeholder='Search for a country...' icon={<Search size={18} />} value={search} onChange={handleChange} />
	);
};

export default SearchBox;

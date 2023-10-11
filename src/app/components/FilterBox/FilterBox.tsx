import { ICountry } from '@/app/types/country.types';
import { Select } from '@/lib/ui';

interface Props {
	data: ICountry[] | null;
	filterList: string[];
	onFilter: (result: ICountry[]) => void;
	onClear: () => void;
}

const FilterBox = ({ data, filterList, onFilter, onClear }: Props) => {
	// [Filter by filterList]
	const handleFilterSelect = (selected: string) => {
		const filtered = data?.filter((item) => item.region === selected);
		onFilter(filtered!);
	};

	return <Select label='Filter by Region' list={filterList} onSelect={handleFilterSelect} onClear={onClear} />;
};

export default FilterBox;

import { useQuery } from '@/app/hooks/useQuery';
import { IBorderCountry } from '@/app/types/country.types';
import { Button } from '@/lib/ui';

interface IProps {
	borders: string[];
}

export const Borders: React.FC<IProps> = ({ borders }) => {
	const url = `https://restcountries.com/v3.1/alpha?codes=${borders.join(',')}&fields=name`;
	const { loading, data: bordersList, error } = useQuery<IBorderCountry[]>(url);

	return (
		<>
			{loading && <p>Loading...</p>}
			{!!error && <p>Error...</p>}
			<div className='flex flex-wrap gap-1'>
				{bordersList &&
					bordersList.map((item) => (
						<Button key={item.name.common} isElevated={true}>
							{item.name.common}
						</Button>
					))}
			</div>
		</>
	);
};

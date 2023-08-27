import { useCountrySearch } from '@/app/hooks/useCountrySearch';
import { useQuery } from '@/app/hooks/useQuery';
import { IBorderCountry } from '@/app/types/country.types';
import { Button, Error, Loading } from '@/lib/ui';

interface IProps {
	borders: string[];
}

export const BorderList: React.FC<IProps> = ({ borders }) => {
	const url = `https://restcountries.com/v3.1/alpha?codes=${borders.join(',')}&fields=name`;
	const { loading, data: bordersList, error } = useQuery<IBorderCountry[]>(url);
	const { handleNavigateSearch } = useCountrySearch();

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					{error ? (
						<Error />
					) : (
						<div className='flex flex-wrap gap-1'>
							{bordersList &&
								bordersList.map((item) => (
									<Button
										key={item.name.common}
										isElevated={true}
										onClick={() => handleNavigateSearch(item.name.common)}
									>
										{item.name.common}
									</Button>
								))}
						</div>
					)}
				</>
			)}
		</>
	);
};

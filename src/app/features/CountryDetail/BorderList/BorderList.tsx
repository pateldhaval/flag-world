import { useCountrySearch } from '@/app/hooks/useCountrySearch';
import { IBorderCountry } from '@/app/types/country.types';
import { useGetRequest } from '@/lib/hooks/useGetRequest';
import { Button, Error, Loading } from '@/lib/ui';
import { Stack } from '@/lib/ui/layers/Stack';

interface IProps {
	borders: string[];
}

export const BorderList: React.FC<IProps> = ({ borders }) => {
	const bordersStr = borders.join(',');
	const url = `https://restcountries.com/v3.1/alpha?codes=${bordersStr}&fields=name`;
	const { isLoading, data: bordersList, error } = useGetRequest<IBorderCountry[]>(`border-${bordersStr}`, url);
	const { handleNavigateSearch } = useCountrySearch();

	if (isLoading) return <Loading />;

	if (error) return <Error message='Oops! Error in fetching border countries, please try again.' />;

	return (
		<Stack direction='row' wrap='wrap' gap={4}>
			{bordersList &&
				bordersList.map((item) => (
					<Button
						key={item.name.common}
						isElevated={true}
						size='sm'
						onClick={() => handleNavigateSearch(item.name.common)}
					>
						{item.name.common}
					</Button>
				))}
		</Stack>
	);
};

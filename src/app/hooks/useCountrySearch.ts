import { createSearchParams, useNavigate } from 'react-router-dom';

export interface INavigateSearch {
	path: string;
	key: string;
	query: string;
}

export const useCountrySearch = () => {
	const navigate = useNavigate();

	const handleNavigateSearch = (query: string) => {
		navigate({
			pathname: '/country-detail',
			// search: `?country=${name.common}`
			search: createSearchParams({
				country: query
			}).toString()
		});
	};

	return { handleNavigateSearch };
};

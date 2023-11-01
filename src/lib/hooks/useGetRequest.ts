import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

export const useGetRequest = <T>(key: string, url: string) => {
	const { isLoading, data, error } = useQuery<T>({
		queryKey: [key],
		queryFn: async () => {
			const res = await axios.get<T>(url);
			return res.data;
		}
	});

	return { isLoading, data, error };
};

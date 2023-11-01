import { useQuery } from '@tanstack/react-query';

export const useGetRequest = <T>(key: string, url: string) => {
	const { isLoading, data, error } = useQuery<T>({
		queryKey: [key],
		queryFn: async () => {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		}
	});

	return { isLoading, data, error };
};

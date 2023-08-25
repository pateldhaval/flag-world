import { useEffect, useState } from 'react';

export const useQuery = <T>(url: string) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<unknown | null>(null);

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const res = await fetch(url);
				const data = await res.json();
				setData(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		})();
	}, [url]);

	return { loading, data, error };
};

import { Loading, Stack } from '@/lib/ui';

export const LazyLoader = () => {
	return (
		<Stack justifyContent='center' alignItems='center'>
			<Loading size={32} />
		</Stack>
	);
};

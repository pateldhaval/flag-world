import { useCallback } from 'react';

type StorageValue = string;

export const useLocalStorage = (key: string) => {
	return useStorage(key, window.localStorage);
};
export const useSessionStorage = (key: string) => {
	return useStorage(key, window.sessionStorage);
};

const useStorage = (key: string, storage: Storage) => {
	const get = useCallback(() => storage.getItem(key), [key, storage]);

	const set = useCallback(
		(value: StorageValue) => {
			storage.setItem(key, value);
		},
		[key, storage]
	);

	return { get, set };
};

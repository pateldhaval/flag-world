export type ObjectList = { [key: string]: string };

export interface IFlag {
	png: string;
	svg: string;
	alt: string;
}

export interface ICountryName {
	common: string;
	official: string;
	nativeName: { [key: string]: ObjectList };
}

export interface ICountry {
	flags: IFlag;
	name: ICountryName;
	capital: string[];
	population: number;
	region: string;
	subregion: string;
	tld: string[];
	currencies: object;
	languages: object;
	borders: string[];
}

export interface IBorderCountry {
	name: ObjectList;
}

export interface IFlag {
	png: string;
	svg: string;
	alt: string;
}

export interface ICountryName {
	common: string;
	official: string;
	nativeName: object;
}

export interface ICountry {
	flags: IFlag;
	name: ICountryName;
	capital: string[];
	region: string;
	population: number;
}
